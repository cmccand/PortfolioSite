import Ember from 'ember';

export default Ember.Controller.extend({

 skills : [
    {
      img: '/assets/images/Sass.png',
      name: 'Sass',
      experience: 'Building custom stylesheets using DRY code',
      years: 2 + '+'
    },
    {
      img: 'assets/images/Ember.jpg',
      name: 'Ember',
      experience: 'Building frontend architecture from the ground up using Ember and Ember-Data',
      years: 2
    },
    {
      img: '/assets/images/JS.png',
      name: 'Javascript',
      experience: 'ES6, Object-Oriented Programming and Functional Programming',
      years: 2 + '+'
    },
    {
      img: '/assets/images/angular.png',
      name: 'Angular',
      experience: 'Building frontend applications using Angular I',
      years: '<' + 1
    },
    {
      img: '/assets/images/react.png',
      name: 'React',
      experience: 'Building custom stylesheets using DRY code',
      years: '<' + 1
    },
    {
      img: '/assets/images/D3.png',
      name: 'D3.js',
      experience: 'Built custom charting library using D3.js and Ember Composable Helpers',
      years: '<' + 1
    },
    {
      img: '/assets/images/chai.png',
      name: 'Mocha, Chai and Sinon',
      experience: 'Writing frontend integration, acceptance and unit tests',
      years: 1.5
    },
    {
      img: '/assets/images/qUnit.png',
      name: 'QUnit',
      experience: 'Writing frontend tests',
      years: 1.5
    },
  ]
});
