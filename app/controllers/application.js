import Ember from 'ember';

export default Ember.Controller.extend({
  subMenuOpen: false,
  currentPortal: null,

  actions: {
    toggle(propName) {
      this.toggleProperty(propName);
    },
    split(route, ev) {
      const clickedItem = Ember.$(ev.target).closest('.submenu-item');
      const sibs = Ember.$(clickedItem).parent().siblings().children('.submenu-item');
      const menuItems = Ember.$('.menu-card').find('.menu-item');
      const nonClickedItems = Ember.$.merge(sibs, menuItems);

      Ember.$(clickedItem).addClass('current-portal-btn');
      Ember.$(nonClickedItems).addClass('other-btn');
      Ember.$(nonClickedItems).slideUp(100);

      this.set('currentPortal', route);

    },
    back(ev) {

      const clickedItem = Ember.$('.menu-card').find('.current-portal-btn');
      const nonClickedItems = Ember.$('.menu-card').find('.other-btn');
      const enterpriseButton = Ember.$('.menu-card').find('.submenu-item')[0];

      Ember.$(nonClickedItems).slideDown(100);
      Ember.$(clickedItem).removeClass('current-portal-btn');
      Ember.$(nonClickedItems).removeClass('other-btn');
      Ember.$(enterpriseButton).slideDown(500);//hack to fix jquery issue

      this.set('currentPortal', null);

      this.transitionToRoute('projects');
    }
  }
});
