import Ember from 'ember';

export default Ember.Component.extend({
  productRating: Ember.computed('product.comments.length', function() {
   var i = 0;
   var j = 0;
   this.product.get('comments').map(function(comment){
    //  debugger;
     j += 1;
     i += parseInt(comment.get('rating'));
   });
    return (i / j);
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
// var totalRating = 0
// for(var i = 0;i < arrayName.length; i++) {
//   var totalRating += arrayName[i].rating
// } return totalRating/arrayName.length;
