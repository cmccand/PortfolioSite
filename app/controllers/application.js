import Ember from 'ember';

export default Ember.Controller.extend({
  subMenuOpen: false,
  actions: {
    toggle(propName) {
      this.toggleProperty(propName);
    }
  }
});
