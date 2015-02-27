#!/usr/bin/env node
'use strict';

var fishInstall = require('./');

var fs = require('fs');


var usage = function () {
  return 'Usage:  fish-install DIRECTORY\n'
    + '        fish-install remove DIRECTORY\n'
    + '        fish-install [--help | --version]';
};


var version = function () {
  var pkg = require('./package.json');
  return pkg.name + ' v' + pkg.version;
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
  if (argv == '--help') {
    console.log(usage());
    return 0;
  }
  if (argv == '--version') {
    console.log(version());
    return 0;
  }

  try {
    switch (argv.length) {
      case 1:
        return main('install', argv[0]);

      case 2:
        if (argv[0] == 'remove') {
          return main('remove', argv[1]);
        }
        throw new Error('Invalid method: ' + argv[0]);

      default:
        console.error(usage());
        return 1;
    }
  }
  catch (e) {
    console.error(usage());
    throw e;
  }
}(process.argv.slice(2)));
