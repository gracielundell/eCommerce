import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalCart: Ember.computed('items.[]', function() {
    var totalCost = 0;
    var items = this.get('items');
    console.log("items: ", items);
    for (var i = 0; i < items.length; i++ ) {
      totalCost += items[i].get('price');
    }
    return totalCost;
  }),

  add(item) {
    this.get('items').pushObject(item);
  }

});
