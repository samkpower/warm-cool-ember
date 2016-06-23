import TinyColor from 'npm:tinycolor2';
import Ember from 'ember';

export default Ember.Service.extend({
  primary: '#2196F3',
  lightPrimary: null,
  darkPrimary: null,

  secondary: '#0D47A1',
  lightSecondary: null,
  darkSecondary: null,

  tertiary: '#3F51B5',
  lightTertiary: null,
  darkTertiary: null,

  accent: '#F44336',
  lightAccent: null,
  darkAccent: null,

  neutral: '#FAFAFA',
  lightNeutral: null,
  darkNeutral: null,

  defaultPalette: {},

  init() {
    this._super(...arguments);
    this.set('defaultPalette', {
      primary: this.get('primary'),
      lightPrimary: TinyColor(this.get('primary')).lighten().toString(),
      darkPrimary: TinyColor(this.get('primary')).darken().toString(),
      secondary: this.get('secondary'),
      tertiary: this.get('tertiary'),
      accent: this.get('accent'),
      neutral: this.get('neutral')
    });
  }
});
