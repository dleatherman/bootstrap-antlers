# Bootstrap Antlers

*A theme for using grunt-kss to generate styleguides based on Twitter Bootstrap*

## Getting Started

### Grunt

Install `grunt-cli` with:

`npm install -g grunt-cli`

Then run:

`npm install`

This will install all of the node.js dependencies.

## The "kss" task

### Overview
In your project's Gruntfile, add a section named `kss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  kss: {
    options: {
      includeType: 'less',
      includePath: 'src/css/less/style.less',
      template: 'bootstrap-antlers'
    },
    dist: {
     files: {
       '/path/to/destdir': ['/path/to/sourcedir']
     }
   }
 }
})
```

### Options

#### options.includeType
Type: `String`
Default value: `null`

`style, less, stylus, sass, css`

A string value that is used to compile and include to build your style.

#### options.includePath
Type: `String`
Default value: `null`

A string value that is used to specify incluede stylesheet path.

#### options.template
Type: `String`
Default value: `null`

A string value that is used to use a custom template to build your styleguide.

#### options.mask
Type: `String`
Default value: `null`

A string value that is used to use a custom mask for detecting stylesheets.