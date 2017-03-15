/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'node_modules',
        'bower_components/owl.carousel/src/scss/'
      ]
    },
  });
  app.import('bower_components/owl.carousel/src/js/owl.carousel.js');
  app.import('bower_components/owl.carousel/src/js/owl.autoheight.js');
  app.import('bower_components/owl.carousel/src/js/owl.navigation.js');
  app.import('bower_components/owl.carousel/src/scss/owl.carousel.scss');
    app.import('bower_components/owl.carousel/src/scss/owl.theme.default.scss');
  app.import('bower_components/owl.carousel/src/scss/owl.autoheight.scss');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
