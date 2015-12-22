'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-react-starter-kit-component:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        componentName: 'MyComponent',
        componentStyleExtension: 'scss'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/components/MyComponent/MyComponent.js',
      'src/components/MyComponent/MyComponent.scss',
      'src/components/MyComponent/package.json'
    ]);
  });
});
