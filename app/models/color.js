import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

var Color = Model.extend({
  name: attr('string'),
  hex: attr('string')
});

Color.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'blue',
      hex: '#ff4422'
    }
  ]
});

export default Color;
