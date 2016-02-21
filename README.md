# grunt-cleanempty [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-image]][david-url]

> Clean empty files and folders.


## Getting Started
This plugin requires Grunt `>=0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cleanempty --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cleanempty');
```


## The "cleanempty" task


### Overview
In your project's Gruntfile, add a section named `cleanempty` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cleanempty: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```


### Options

#### options.files
Type: `Boolean`  
Default value: `true`  

Remove empty files or not.

#### options.folders
Type: `Boolean`  
Default value: `true`  

Remove empty folders or not.

#### options.force
Type: `Boolean`  
Default value: `false`  

Override the task from blocking deletion of folders outside current working dir (CWD). Use with caution.

#### options.noJunk
Type: `Boolean`  
Default value: `false`  

Consider folders that only have [junk](https://github.com/sindresorhus/junk) files in them to be empty. Use in conjunction with `options.folders` set to `true`.


### Usage Examples

#### Default Options
```js
grunt.initConfig({
  cleanempty: {
    options: {},
    src: ['src/testing/**/*', 'src/123/*'],
  },
});
```

#### Custom Options
```js
grunt.initConfig({
  cleanempty: {
    options: {
      force: true,
    },
    testing: {
      options: {
        files: false,
      },
      src: ['src/testing/**/*']
    }
    123: {
      src: ['src/123/*'],
    },
  },
});
```


## Roadmap Features
* switch to asynchronous file system functions to better support [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)


## Release History
* 1.0.4 supports grunt `1.x` and npm `3.x`
* 1.0.3 added `options.noJunk`
* 1.0.2 performance enhancement
* 1.0.1 tweaked log verbosity
* 1.0.0 release
* 0.2.1 added tests
* 0.2.0 added `options.folders`
* 0.1.0 initial release


[npm-image]: https://img.shields.io/npm/v/grunt-cleanempty.svg
[npm-url]: https://npmjs.org/package/grunt-cleanempty
[travis-image]: https://img.shields.io/travis/stevenvachon/grunt-cleanempty.svg
[travis-url]: https://travis-ci.org/stevenvachon/grunt-cleanempty
[david-image]: https://img.shields.io/david/stevenvachon/grunt-cleanempty.svg
[david-url]: https://david-dm.org/stevenvachon/grunt-cleanempty
