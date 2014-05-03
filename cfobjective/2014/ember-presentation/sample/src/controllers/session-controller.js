App.SessionController = Ember.ObjectController.extend({
  actions : {
    going : function( session ){
      this.set('going', ( this.get( 'going' ) ) ? false : true);
    }
  },
  goingClass : function(){
  	return (this.get( 'going' ))? 'attending' : '';
  }.property( 'going' )
});