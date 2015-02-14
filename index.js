'use strict';

var once = require('once');

var path = require('path')
  , spawn = require('child_process').spawn;


module.exports = function (sourceDir, cb) {
  sourceDir = path.resolve(sourceDir);
  cb = once(cb);

  var cmd = 'set -U fish_function_path $fish_function_path "' + sourceDir + '"';
  spawn('fish', ['-c', cmd])
    .on('error', cb)
    .on('exit', function (code, signal) {
      var error = (code != 0)
                ? new Error('Fish did not terminate normally')
                : null;
      cb(error);
    });
};
