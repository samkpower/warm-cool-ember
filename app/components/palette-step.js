/* global Ember */
export default Ember.Component.extend({
  classNames: ['l-step'],
  classNameBindings: ['stepClass'],

  // passed properties
  stepClassName: null,

  stepClass: Ember.computed('stepClassName', function(){
    return `js-${this.get('stepClassName')}`;
  })
});
