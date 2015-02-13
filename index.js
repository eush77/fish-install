'use strict';

var path = require('path')
  , spawn = require('child_process').spawn;


module.exports = function (sourceDir) {
  sourceDir = path.resolve(sourceDir);
  var cmd = 'set -U fish_function_path $fish_function_path "' + sourceDir + '"';
  spawn('fish', ['-c', cmd], { stdio: 'inherit' });
};
