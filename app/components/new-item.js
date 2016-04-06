import Ember from 'ember';

export default Ember.Component.extend({
showAddItemForm: false,

  actions: {
    showAddItemForm() {
      this.set('showAddItemForm',true);
    },
    saveNewItem() {
      var params = {
        name: this.get('name') ? this.get('name') : " ",
        description: this.get('description') ? this.get('description') : " ",
        price: parseInt(this.get('price'))
      };
      console.log("params: ", params);
      this.set('name', "");
      this.set('description', "");
      this.set('price', "");
      this.sendAction('saveNewItem', params);
    }
  }
});
