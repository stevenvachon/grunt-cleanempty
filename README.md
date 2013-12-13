# grunt-cleanempty

> Clean empty files and folders.

## Getting Started
This plugin requires Grunt `~0.4.2`

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

#### options.force
Type: `Boolean`  
Default value: `false`  

Override the task from blocking deletion of folders outside current working dir (CWD). Use with caution.

### Usage Examples

#### Default Options
```js
grunt.initConfig({
  cleanempty: {
    options: {},
    src: ['src/testing/**/*', 'src/123'],
  },
});
```

#### Custom Options
```js
grunt.initConfig({
  cleanempty: {
    options: {
      files: false,
    },
    src: ['src/testing/**/*', 'src/123'],
  },
});
```

## Release History
0.1.0 initial release
