import Ember from 'ember';

export function productComments(params/*, hash*/) {
  var product = params[0];

  if(product.get('comments').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(productComments);
