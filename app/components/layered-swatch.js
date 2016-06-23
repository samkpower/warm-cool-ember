/* global Ember */
import TinyColor from 'npm:tinycolor2';

export default Ember.Component.extend({
  tagName: 'layered-swatch',

  // passed properties
  swatchColor: null,

  // computed properties
  lightSwatch: Ember.computed('swatchColor', function() {
    let color = this.get('swatchColor');
    return TinyColor(color).lighten(15).toString();
  }),

  darkSwatch: Ember.computed('swatchColor', function() {
    let color = this.get('swatchColor');
    return TinyColor(color).darken(15).toString();
  })
});
