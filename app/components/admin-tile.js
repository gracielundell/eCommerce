import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteProduct(product) {
      this.sendAction('deleteProduct', product);
    }
  }
});
