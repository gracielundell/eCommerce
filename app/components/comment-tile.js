import Ember from 'ember';

export default Ember.Component.extend({
  productRating: Ember.computed('product.comments.length', function() {
   var rating = 0;
   var totalRating = 0;
   this.get('product').get('comments').map(function(comment){
    //  debugger;
     totalRating += 1;
     rating += parseInt(comment.get('rating'));
   });
    return (rating / totalRating);
 }),
  // productRating: Ember.computed('product.comments', function() {
  //   // var averageRating = this.get('comment').then(function(stuff){
  //   //
  //   //   debugger;
  //   // });
  //   // debugger;
  //   this.get('product').get('comments').map(function(comment){
  //     // debugger;
  //     console.log(comment.get('rating'));
  //     // return product.get('comments');
  //   })
  //
  //   var totalRating = 0;
  //   // comments.forEach(function(comment){
  //   //   console.log(comment.get('author'));
  //   //   totalRating += parseInt(comment.get('rating'));
  //   // })
  //   // return totalRating / (comments.length);
  //   // debugger;
  //   //averageRating.get('content').currentState[0] //works with {}
  //   // console.log("average rating", averageRating);
  //   // return averageRating;
  // }),
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
