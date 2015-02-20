#!/usr/bin/env node
'use strict';

var install = require('./');

var fs = require('fs');


var usage = function () {
  console.error('Usage:  fish-install DIRECTORY');
  console.error('        fish-install [--help | --version]');
  return 1;
};


var version = function () {
  var pkg = require('./package.json');
  console.error(pkg.name + ' v' + pkg.version);
  return 1;
}


var main = function (dir) {
  if (!fs.statSync(dir).isDirectory()) {
    throw new Error('Not a directory: ' + dir);
  }

  install(dir, function (err) {
    if (err) throw err;
  });

  return 0;
};


process.exitCode = (function (argv) {
  if (argv.length != 1) {
    return usage();
  }

  switch (argv[0]) {
    case '--help':
      return usage();

    case '--version':
      return version();

    default:
      try {
        return main(argv[0]);
      }
      catch (e) {
        usage();
        throw e;
      }
  }
}(process.argv.slice(2)));
