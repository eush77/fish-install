'use strict';
require('object.assign').shim();

var once = require('once');

var path = require('path')
  , spawn = require('child_process').spawn;


var runScript = function (script, sourceDir, cb) {
  script = path.resolve(__dirname, 'src', script);
  sourceDir = path.resolve(sourceDir);
  cb = once(cb);

  var env = Object.assign({}, process.env, {
    'FISH_INSTALL_PATH': sourceDir
  });

  spawn('fish', [script, sourceDir], {
    stdio: 'inherit',
    env: env
  }).on('error', cb)
    .on('exit', function (code, signal) {
      var error = (code != 0)
                ? new Error('Fish did not terminate normally')
                : null;
      cb(error);
    });
};


module.exports = runScript.bind(null, 'install.fish');
module.exports.install = module.exports;
module.exports.remove = runScript.bind(null, 'remove.fish');
