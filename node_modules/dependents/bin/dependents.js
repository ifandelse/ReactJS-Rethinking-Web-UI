#!/usr/bin/env node

'use strict';

var dependents = require('../'),
    filename   = process.argv[2],
    directory  = process.argv[3],
    cluster    = require('cluster'),
    q          = require('q');

/**
 * Uniquely aggregates the dependents across forks (if used).
 * This being an object allows us to avoid duplicate dependents.
 *
 * @type {Object}
 */
var _dependents = {};

/**
 * Minimum Number of files needed to require clustering
 *
 * @type {Number}
 */
var threshold = 500;

/**
 * Forks separate node processes to find dependents for the filename in parallel
 *
 * @param  {String} filename  - File to find the dependents for
 * @param  {Array}  files     - List of JS files to process
 */
function spawnWorkers(filename, files) {
  var numCPUs = require('os').cpus().length,
      numFiles = files.length,
      // We don't care to overshoot the number of files, slice will correct this
      chunkSize = Math.ceil(numFiles / numCPUs),
      worker;

  for (var i = 0; i < numCPUs; i++) {
    worker = cluster.fork();
    worker.send({
      filename: filename,
      files: files.slice(i * chunkSize, (i + 1) * chunkSize)
    });
  }
}

function whenAllWorkersFinish(cb) {
  q.all(Object.keys(cluster.workers).map(function(id) {
    var deferred = q.defer(),
        worker = cluster.workers[id];

    worker.on('message', function(deps) {
      deps.forEach(function(depFilename) {
        _dependents[depFilename] = 1;
      });

      deferred.resolve();
      worker.kill();
    });

    return deferred.promise;
  }))
  .then(function() {
    cb(Object.keys(_dependents));
  });
}

/** @param  {Array} dependents */
function printDependents(dependents) {
  dependents.forEach(function(dependent) {
    console.log(dependent);
  });
}

if (cluster.isMaster) {
  var filesCb = function(files) {
    if (files.length >= threshold) {
      spawnWorkers(filename, files);
      whenAllWorkersFinish(printDependents);

    } else {
      dependents.for({
        filename:  filename,
        directory: directory,
        files:     files,
        success:   printDependents
      });
    }
  };

  dependents.getJSFiles({
    directory: directory,
    filesCb: filesCb
  });
}

if (cluster.isWorker) {
  process.on('message', function(args) {
    var filename  = args.filename,
        files     = args.files;

    dependents.for({
      filename:   filename,
      directory:  directory,
      files:      files,
      success: function(deps) {
        process.send(deps);
      }
    });
  });
}
