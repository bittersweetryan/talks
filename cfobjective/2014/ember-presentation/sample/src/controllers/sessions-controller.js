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
  tracks : function(){
    var i = 0;
    return this.reduce( function(prev, curr ){
      if( !prev.length || (prev[ prev.length -1 ].get( 'track') !== curr.get( 'track' ) )){
        prev.push( curr );
        
      }
    return prev;
      
    }, [] ) ;
  }.property()
});