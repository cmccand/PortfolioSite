import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['owl-carousel', 'owl-theme'],
  didInsertElement() {
    this._super(...arguments);
    Ember.$('.owl-carousel').owlCarousel({
      autoheight: true,
      autoplay: false,
      center: true,
      dots: true,
      items: 1,
      loop: false,
      margin: 8,
      nav: false,
      selected: null,
      stagePadding: 16,
      startPosition: 1
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    this._clean();
  },

  _clean: function() {
    this.$().owlCarousel().trigger('destroy.owl.carousel');
  }
});
