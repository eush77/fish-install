[![npm](https://nodei.co/npm/fish-install.png)](https://nodei.co/npm/fish-install/)

# fish-install

[![Dependency Status][david-badge]][david]

Unobtrusively install [Fish](http://fishshell.com/) functions into the shell.

No config adjustment required. `$fish_function_path` is modified instead.

[david]: https://david-dm.org/eush77/fish-install
[david-badge]: https://david-dm.org/eush77/fish-install.png

## Example

```js
var install = require('fish-install');

install(__dirname + '/functions', function (err) {
  /*..*/
});
```

## CLI

`fish-install $directory` installs `$directory` as a Fish search path.

## API

### `install(path, cb(err))`

`path`: directory with functions you want to install.

**Note**: functions themselves are not copied anywhere, so the directory should better be persistent.

## Install

As a set-up utility for functions and scripts (use postinstall hook or the API):

```shell
npm install fish-install
```

As a system-wide command line utility:

```shell
npm install -g fish-install
```

## License

MIT
