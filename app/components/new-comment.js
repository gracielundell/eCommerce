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
      this.set('showNewCommentForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
