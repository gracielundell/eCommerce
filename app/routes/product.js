import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('product', params.product_id);
    },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var product = params.product;
      product.get('comments').addObject(newComment);
      newComment.save().then(function()  {
        return product.save();
      });
    }
  }
});
