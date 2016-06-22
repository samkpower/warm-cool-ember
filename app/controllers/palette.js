/* global Ember */
export default Ember.Controller.extend({
  queryParams: ['step', 'contrast', 'temperature', 'intensity', 'highlight'],

  palette: {
    bg: '#3C3744',
    textPrimary: 'LightYellow',
    textSecondary: 'LightYellow',
    highlightPrimary: 'HotPink',
    highlightSecondary: 'HotPink'
  },

  paletteBuilder: Ember.inject.service('palette-builder'),

  defaultPalette: Ember.computed('paletteBuilder', function(){
    return this.get('paletteBuilder.defaultPalette');
  }),

  palette: Ember.computed('defaultPalette', function(){
    return {
      bg: this.get('defaultPalette.darkSecondary'),
      textPrimary: this.get('defaultPalette.darkPrimary'),
      textSecondary: this.get('defaultPalette.darkSecondary'),
      highlightPrimary: this.get('defaultPalette.accent'),
      highlightSecondary: this.get('defaultPalette.darkTertiary')
    }
  }),

  step: null,

  _scrollToStep: function(stepName) {
    let stepClassName = `.js-${stepName}`;
    let scrollTopValue = Ember.$(stepClassName).offset().top;
    Ember.$('body').animate({ scrollTop: scrollTopValue }, 1000, 'easeInOutExpo');
  },

  actions: {
    goToStep(stepName) {
      this.set('step', stepName);
      this._scrollToStep(stepName);
    },
    setIntensity(value) {
      this.set('intensity', value);
    },
    setContrast(value) {
      this.set('contrast', value);
    },
    setTemperature(value) {
      this.set('temperature', value);
    }
  }
});
