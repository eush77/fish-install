'use strict';

var once = require('once');

var path = require('path')
  , spawn = require('child_process').spawn;


var install = path.resolve(__dirname, 'src/install.fish');

module.exports = function (sourceDir, cb) {
  sourceDir = path.resolve(sourceDir);
  cb = once(cb);

  spawn('fish', [install, sourceDir])
    .on('error', cb)
    .on('exit', function (code, signal) {
      var error = (code != 0)
                ? new Error('Fish did not terminate normally')
                : null;
      cb(error);
    });
};
