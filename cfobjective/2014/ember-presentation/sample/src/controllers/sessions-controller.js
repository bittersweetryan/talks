App.SessionsIndexController = Ember.ArrayController.extend({
  attending : function(){
    return this.reduce( function( prev, curr ){
      if( curr.get( 'going' ) ){
        return prev + 1;
      }  
      else{
        return prev;
      }
    }, 0);
  }.property( '@each.going'),
});