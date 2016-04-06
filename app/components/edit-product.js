import Ember from 'ember';

export default Ember.Component.extend({
  showEditItemForm: false,
  actions: {
    showEditItemForm() {
      this.set('showEditItemForm', true);
    },
    editItem(product) {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: parseInt(this.get('price'))
      };
      this.set('showEditItemForm', false);
      this.sendAction('editItem', product, params);
    }
  }
});
