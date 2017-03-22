import Ember from 'ember';
const ensureRender= function() {
  Ember.$('.owl-nav').css('visibility', 'visible');
}
// const owl = this.$().owlCarousel();
export default Ember.Component.extend({
  classNames: ['owl-carousel'],
  didInsertElement() {
    this._super(...arguments);
    Ember.$('.owl-carousel').owlCarousel({
      autoheight: true,
      autoplay: true,
      center: true,
      items: 1,
      loop: false,
      margin: 8,
      selected: null,
      stagePadding: 10,
      startPosition: 0,
      nav: true,
      navElement: [
       "button class='md-button md-raised md-fab md-ink-ripple'",
      ],
      navText: [
        "<i class='material-icons md-48'>keyboard_arrow_left</i>",
        "<i class='material-icons md-48'>keyboard_arrow_right</i>"
      ],
      // responsive: {
      //   960: {
      //     items: 1,
      //     stagePadding: 30
      //   }
      // }
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
