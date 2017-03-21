import Ember from 'ember';

export default Ember.Controller.extend({
  screenshots: [
    { src: '/assets/screenshots/enterprise1.png' },
    { src: '/assets/screenshots/enterprise2.png' },
    { src: '/assets/screenshots/enterprise3.png' },
    { src: '/assets/screenshots/enterprise4.png' }
  ],
  actions: {
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
