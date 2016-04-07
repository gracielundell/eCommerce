import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  text: DS.attr(),
  product: DS.belongsTo('product', { async: true }),
  rating: DS.attr()
});
