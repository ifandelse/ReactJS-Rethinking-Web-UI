var dir       = require('node-dir'),
    detective = require('detective-amd'),
    path      = require('path'),
    fs        = require('fs');

/**
 * Look-up-table whose keys are filenames of JS files in the directory
 * the value for each key is an object of (filename -> dummy value) files that depend on the key
 *
 * @type {Object}
 */
var dependents = {};

/**
 * Computes the dependents for the given file across a directory or list of filenames
 *
 * @param  {Object}       options
 * @param  {String}       options.filename  - The file whose dependents to compute
 * @param  {String|Array} options.directory - Directory name or list of filenames to process
 * @param  {Function}     options.success   - ({Array}) -> null - Executed with the dependents for the given filename
 */
module.exports.for = function (options) {
  var filename  = options.filename,
      directory = options.directory,
      files     = options.files,
      cb        = options.success;

  if (!cb)        throw new Error('expected callback');
  if (!directory) throw new Error('expected directory name');
  if (!filename)  throw new Error('expected filename whose dependents to compute');

  filename = path.resolve(filename);

  if (! files) {
    this.getJSFiles({
      directory: directory,
      contentCb: function(file, content) {
        processDependents(file, content, directory);
      },
      // When all files have been processed
      filesCb: function() {
        cb(getDependentsForFile(filename));
      }
    });

  } else {
    files.forEach(function(filename) {
      var content = fs.readFileSync(filename).toString();
      processDependents(filename, content, directory);
    });

    cb(getDependentsForFile(filename));
  }
};

/**
 * Returns the list of JS filenames within the given directory (and its subdirectories).
 * Exposed for convenience.
 *
 * @param  {Object}   options
 * @param  {String}   options.directory
 * @param  {Function} options.filesCb     - ({Array}) -> null - Executed with the list of found JS files within the directory
 * @param  {Function} [options.contentCb] - ({String}, {String}) -> null - Executed with the filename and contents of the file
 */
module.exports.getJSFiles = function(options) {
  options = options || {};

  var directory = options.directory,
      contentCb = options.contentCb,
      filesCb   = options.filesCb;

  directory = path.resolve(directory);

  dir.readFiles(directory, {
    match:   /.js$/,
    exclude: /^\./
  },
  function(err, content, currentFile, next) {
    if (err) throw err;

    if (contentCb) contentCb(path.resolve(currentFile), content);

    next();
  },
  function(err, files){
    if (err) throw err;

    files = files.map(function(filename) {
      return path.resolve(filename);
    });

    filesCb(files);
  });
};

/**
 * @param {String} filename
 * @param {String} fileContent
 * @param {String} [directory]
 */
function processDependents(filename, fileContent, directory) {
  if (! fileContent) return;

  // @todo: Detect if it's commonjs or amd then choose the appropriate detective
  var dependencies = detective(fileContent);

  dependents[filename] = dependents[filename] || {};

  // Register the current file as dependent on each dependency
  dependencies.forEach(function(dep) {
    dep                       = (directory ? path.resolve(directory, dep) : dep) + '.js';
    dependents[dep]           = dependents[dep] || {};
    dependents[dep][filename] = 1;
  });
}

/**
 * @param  {String} filename
 * @return {Array}
 */
function getDependentsForFile(filename) {
  return Object.keys(dependents[filename] || {});
}
