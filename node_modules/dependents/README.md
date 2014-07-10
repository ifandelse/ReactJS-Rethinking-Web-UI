### Dependents

Get the JS modules that depend on (i.e., require) a given module.

`npm install dependents`

Primarily built for use in [Sublime Dependents](https://github.com/mrjoelkemp/sublime-dependents)

### Usage

```javascript
dependents.for(options)
```

Supported options:

* `filename`: the module that you want to get the dependents of
* `directory`: the directory to search for dependents
* 'files': list of files to search through (if you want to control the files processed). Useful in clustering.
* `callback`: a function that should accept a list of filenames representing modules that dependent on the module in `filename`

Example:

```javascript
var dependents = require('dependents');

dependents.for({
  filename: './a.js',
  directory: './',
  success: function (dependents) {
    console.log(dependents);
  }
});
```

Or via a shell command:

Requires `npm install -g dependents`

```bash
dependents filename directory
```
