import Ember from 'ember';

export default Ember.Service.extend({
  // how many colours should a palette have?
  //darkPrimary
  //darkSecondary
  //darkTertiary
  //lightPrimary
  //lightSecondary
  //lightTertiary

  defaultPalette: {
    darkPrimary: '#212121',
    lightPrimary: '#727272',
    darkSecondary: '#2196F3',
    lightSecondary: '#BBDEFB',
    darkTertiary: '#727272',
    lightTertiary: '#B6B6B6',
    accentColor: '#FF5252'
  }
});
