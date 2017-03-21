import Ember from 'ember';

export default Ember.Controller.extend({
  subMenuOpen: false,
  actions: {
    toggle(propName) {
      this.toggleProperty(propName);
    },
    back(ev) {
      console.log('back');
      const clickedItem = Ember.$('.menu-card').find('.current-portal-btn');
      const nonClickedItems = Ember.$('.menu-card').find('.other-btn');
      console.log('currentPortalButton', currentPortalButton);
      console.log('nonClicked', nonClickedItems);

      Ember.$(nonClickedItems).slideDown(50);
      this.set('currentPortal', null);
      Ember.$(clickedItem).removeClass('current-portal-btn');
      Ember.$(nonClickedItems).removeClass('other-btn');
      this.transitionToRoute('about');
    }
  }
});
