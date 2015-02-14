#!/usr/bin/env node
'use strict';

var install = require('./');

var fs = require('fs');


var usage = function () {
  console.error('Usage:  fish-install DIRECTORY');
  return 1;
};


process.exitCode = (function main (argv) {
  if (argv.length != 1) {
    return usage();
  }

  var dir = argv[0];
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

  return (install(dir), 0);
}(process.argv.slice(2)));
