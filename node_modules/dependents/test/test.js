var dependents = require('../');

dependents.for({
  filename: __dirname + '/example/b.js',
  directory: __dirname + '/example',
  success: function(dependents) {
    console.log('Dependents of ./example/b.js: ', dependents);
    console.log(dependents.length === 1);
    console.log(dependents[0].indexOf('a.js') !== -1);
  }
});
