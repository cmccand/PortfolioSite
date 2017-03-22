import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('enterprise');
    this.route('dev-portal');
    this.route('my-vinli');
  });
  this.route('skills');
  this.route('books');
  this.route('contact');
  this.route('me');
});


export default Router;
