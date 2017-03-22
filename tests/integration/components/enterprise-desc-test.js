import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enterprise-desc', 'Integration | Component | enterprise desc', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enterprise-desc}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enterprise-desc}}
      template block text
    {{/enterprise-desc}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
