[![npm](https://nodei.co/npm/fish-install.png)](https://nodei.co/npm/fish-install/)

# fish-install

[![Dependency Status][david-badge]][david]

Unobtrusively install [Fish](http://fishshell.com/) functions into the shell.

No config adjustment required. `$fish_function_path` is modified instead.

[david]: https://david-dm.org/eush77/fish-install
[david-badge]: https://david-dm.org/eush77/fish-install.png

## CLI

```
fish-install [install] $directory
```

This line installs `$directory` as a new Fish search path.

```
fish-install remove $directory
```

This line removes `$directory` (all occurrences) from `$fish_function_path`.

## API

### `fishInstall(path, cb(err))`
### `fishInstall.install(path, cb(err))`

`path` — directory with functions to install.

**Note**: functions themselves are not copied anywhere, so the directory should better be persistent.

### `fishInstall.remove(path, cb(err))`

`path` — directory to remove from `$fish_function_path`.

## Publishing Fish functions to npm

1. Install `fish-install` as a dependency.
1. Put your functions to a separate directory (say `functions`).
1. Add the following to `package.json`:

```json
"scripts": {
  "install": "fish-install functions",
  "uninstall": "fish-install remove functions"
}
```

## Install

As a set-up utility for functions:

```shell
npm install fish-install
```

As a system-wide command line utility:

```shell
npm install -g fish-install
```

## License

MIT
