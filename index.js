'use strict';
require('object.assign').shim();

var once = require('once');

var path = require('path'),
    spawn = require('child_process').spawn;


var runScript = function (script, env, argc) {
  var argv = [].slice.call(arguments, 2);
  var cb = once(argv[argc]);
  argv.length = argc;

  script = path.resolve(__dirname, 'src', script);

  spawn('fish', [script].concat(argv), {
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


var install = function (sourceDir) {
  var env = Object.assign({}, process.env, {
    'FISH_INSTALL_PATH': sourceDir
  });

  return runScript('install.fish', env, 1, sourceDir);
};


module.exports = module.exports.install = install;
module.exports.remove = runScript.bind(null, 'remove.fish', {}, 1);
