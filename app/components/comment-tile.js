import Ember from 'ember';

export default Ember.Component.extend({
  // productRating: Ember.computed('comment.rating')
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
