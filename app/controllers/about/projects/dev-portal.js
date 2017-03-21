import Ember from 'ember';

export default Ember.Controller.extend({
  screenshots: [
    { src: '/assets/screenshots/dev-portal1.png' },
    { src: '/assets/screenshots/dev-portal3.png' },
    { src: '/assets/screenshots/dev-portal4.png' },
    { src: '/assets/screenshots/dev-portal5.png' },
    { src: '/assets/screenshots/dev-portal6.png' }
  ],

  // actions: {
  //   prev() {
  //     Ember.$('.owl-carousel').trigger('prev.owl.carousel');
  //   },
  //   next() {
  //     Ember.$('.owl-carousel').trigger('next.owl.carousel');
  //   }
  // }
});
