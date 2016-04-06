import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    saveNewItem(params) {
      var newItem = this.store.createRecord('product', params);
      newItem.save();
    },
    deleteProduct(product) {
      product.destroyRecord();
    }
  }
});
