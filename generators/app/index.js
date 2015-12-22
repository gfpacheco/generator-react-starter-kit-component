'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the transcendent ' + chalk.red('react-component') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What\'s the name of this component of yours?'
      },
      {
        type: 'list',
        name: 'componentStyleExtension',
        message: 'Which style extension does it use?',
        default: 'scss',
        choices: [
          'none',
          'css',
          'scss',
          'less',
          'styl'
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('Component.js'),
      this.destinationPath('src/components/' + this.props.componentName + '/' + this.props.componentName + '.js'),
      this.props
    );

    if (this.props.componentStyleExtension !== 'none') {
      this.fs.copyTpl(
        this.templatePath('Component.css'),
        this.destinationPath('src/components/' + this.props.componentName + '/' + this.props.componentName + '.' + this.props.componentStyleExtension),
        this.props
      );
    }

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('src/components/' + this.props.componentName + '/package.json'),
      this.props
    );
  }
});
