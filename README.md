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

install(__dirname + '/functions');
```

## API

### `install(path)`

`path`: directory with functions you want to install.

**Note**: functions themselves are not copied anywhere, so the directory should better be persistent.

## Install

```shell
npm install -g fish-install
```

## License

MIT
