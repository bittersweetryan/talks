App.SessionController = Ember.ObjectController.extend({
  actions : {
    going : function( session ){
   	   session.toggleProperty( 'going' );
    }
  },
  goingClass : function(){
  	return (this.get( 'going' ))? 'attending' : '';
  }.property( 'going' )
});