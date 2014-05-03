App.SessionsAddController = Ember.ObjectController.extend({
	actions : {
		addSession : function(){
			var session = this.store.createRecord( 'session', {
				track : this.get( 'track' ),
				name : this.get( 'name' ),
				description : this.get( 'description' ),
			} );
		
			this.store.find( 'speaker', this.get( 'speaker' ).id )
				.then( function( speaker ){

					session.set('speaker', speaker );
					return speaker.get( 'sessions' );
				} )
				.then( function( sessions ){
					
					sessions.pushObject( session );
				} );;

			this.transitionToRoute('session',session);

		}
	}
});