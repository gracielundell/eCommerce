import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    deleteItemFromCart(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
