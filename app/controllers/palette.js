export default Ember.Controller.extend({
  queryParams: ['step', 'luminosity', 'temperature', 'intensity', 'highlight'],
  queryParams: {
    step: { replace: true },
    luminosity: { replace: true },
    temperature: { replace: true },
    intensity: { replace: true },
    highlight: { replace: true }
  },
  paletteBg: '#3C3744',
  paletteTextPrimary: 'LightYellow',
  paletteTextSecondary: 'LightYellow',
  paletteHighlightPrimary: 'HotPink',
  paletteHighlightSecondary: 'HotPink'
});
