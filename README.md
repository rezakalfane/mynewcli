mynewcli
========

My new CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![License](https://img.shields.io/npm/l/mynewcli.svg)](https://github.com/rezakalfane/mynewcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @rezakalfane/mynewcli
$ mynewcli COMMAND
running command...
$ mynewcli (-v|--version|version)
@rezakalfane/mynewcli/1.0.0 darwin-x64 node-v14.15.0
$ mynewcli --help [COMMAND]
USAGE
  $ mynewcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mynewcli hello [FILE]`](#mynewcli-hello-file)
* [`mynewcli help [COMMAND]`](#mynewcli-help-command)
* [`mynewcli plugins`](#mynewcli-plugins)
* [`mynewcli plugins:install PLUGIN...`](#mynewcli-pluginsinstall-plugin)
* [`mynewcli plugins:link PLUGIN`](#mynewcli-pluginslink-plugin)
* [`mynewcli plugins:uninstall PLUGIN...`](#mynewcli-pluginsuninstall-plugin)
* [`mynewcli plugins:update`](#mynewcli-pluginsupdate)
* [`mynewcli world [FILE]`](#mynewcli-world-file)

## `mynewcli hello [FILE]`

describe the command here

```
USAGE
  $ mynewcli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mynewcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/rezakalfane/mynewcli/blob/v1.0.0/src/commands/hello.ts)_

## `mynewcli help [COMMAND]`

display help for mynewcli

```
USAGE
  $ mynewcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `mynewcli plugins`

list installed plugins

```
USAGE
  $ mynewcli plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ mynewcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.4/src/commands/plugins/index.ts)_

## `mynewcli plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ mynewcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mynewcli plugins:add

EXAMPLES
  $ mynewcli plugins:install myplugin 
  $ mynewcli plugins:install https://github.com/someuser/someplugin
  $ mynewcli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.4/src/commands/plugins/install.ts)_

## `mynewcli plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ mynewcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ mynewcli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.4/src/commands/plugins/link.ts)_

## `mynewcli plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ mynewcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ mynewcli plugins:unlink
  $ mynewcli plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.4/src/commands/plugins/uninstall.ts)_

## `mynewcli plugins:update`

update installed plugins

```
USAGE
  $ mynewcli plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.9.4/src/commands/plugins/update.ts)_

## `mynewcli world [FILE]`

describe the command here

```
USAGE
  $ mynewcli world [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mynewcli world
  hello world from ./src/world.ts!
```

_See code: [src/commands/world.ts](https://github.com/rezakalfane/mynewcli/blob/v1.0.0/src/commands/world.ts)_
<!-- commandsstop -->
