import Ember from 'ember';

export default Ember.Controller.extend({

  currentPortal: null,

  actions: {

    split(route, ev) {
      const clickedItem = Ember.$(ev.target).closest('.submenu-item');
      const sibs = Ember.$(clickedItem).parent().siblings().children('.submenu-item');
      const menuItems = Ember.$('.menu-card').find('.menu-item');
      const nonClickedItems = Ember.$.merge(sibs, menuItems);

      Ember.$(nonClickedItems).slideUp(50).delay(2000);
      Ember.$(clickedItem).addClass('current-portal-btn');
      Ember.$(nonClickedItems).addClass('other-btn');
      this.set('currentPortal', route);

    },

    back(ev) {
      console.log('back');
      const currentPortalButton = Ember.$('.menu-card').find('.current-portal-btn');
      const nonClickedItems = Ember.$('.menu-card').find('.other-btn');
      console.log('currentPortalButton', currentPortalButton);
      console.log('nonClicked', nonClicked);

      Ember.$(nonClickedItems).slideDown(50);
      this.set('currentPortal', null);
      Ember.$(clickedItem).removeClass('current-portal-btn');
      Ember.$(nonClickedItems).removeClass('other-btn');
      this.transitionToRoute('about');
    }

  }
});
