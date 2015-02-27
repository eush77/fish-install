#!/usr/bin/env node
'use strict';

var fishInstall = require('./');

var fs = require('fs');


var usage = function () {
  console.error('Usage:  fish-install DIRECTORY');
  console.error('        fish-install remove DIRECTORY');
  console.error('        fish-install [--help | --version]');
  return 1;
};


var version = function () {
  var pkg = require('./package.json');
  console.error(pkg.name + ' v' + pkg.version);
  return 1;
};


var main = function (method, dir) {
  if (!fs.statSync(dir).isDirectory()) {
    throw new Error('Not a directory: ' + dir);
  }

  fishInstall[method](dir, function (err) {
    if (err) throw err;
  });

  return 0;
};


process.exitCode = (function (argv) {
  try {
    switch (argv.length) {
      case 0:
        return usage();

      case 1:
        switch (argv[0]) {
          case '--help':
            return usage();

          case '--version':
            return version();

          default:
            return main('install', argv[0]);
        }

      case 2:
        if (argv[0] == 'remove') {
          return main('remove', argv[1]);
        }

      default:
        return usage();
    }
  }
  catch (e) {
    usage();
    throw e;
  }
}(process.argv.slice(2)));
