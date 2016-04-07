import Ember from 'ember';

export default Ember.Component.extend({
  showNewCommentForm: false,
  actions: {
    showNewCommentForm() {
      this.set('showNewCommentForm', true);
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        product: this.get('product'),
        rating: parseInt(this.get('rating'))
      };
      if (params.rating >= 5) {
        params.rating = 5
      } else if (params.rating <=0) {
        params.rating = 1
      }
      this.set('showNewCommentForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
