/* global Ember */
export default Ember.Controller.extend({
  queryParams: ['step', 'luminosity', 'temperature', 'intensity', 'highlight'],

  palette: {
    bg: '#3C3744',
    textPrimary: 'LightYellow',
    textSecondary: 'LightYellow',
    highlightPrimary: 'HotPink',
    highlightSecondary: 'HotPink'
  },

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
    }
  }
});
