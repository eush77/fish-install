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
  try {
    if (!fs.statSync(dir).isDirectory()) {
      return usage();
    }
  }
  catch (e) {
    if (e.code == 'ENOENT') {
      return usage();
    }
    throw(e);
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
      return main(argv[0]);
  }
}(process.argv.slice(2)));
