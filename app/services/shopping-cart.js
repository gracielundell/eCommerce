import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  cartList: Ember.computed('items', function(){
    return this.get('items');
  }),
  totalCart: Ember.computed('items.{@each.price}', function() {
    var totalCost = 0;
    var items = this.get('items');
    for (var i = 0; i < items.length; i++ ) {
      totalCost += items[i].get('price');
    }
    return totalCost;
  }),

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    this.set('items', this.get('items').removeAt(index));
  }

});
