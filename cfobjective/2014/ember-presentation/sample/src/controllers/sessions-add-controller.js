App.SessionsAddController = Ember.ObjectController.extend({
	actions : {
		addSession : function(){
			var session = this.store.createRecord( 'session', {
				track : this.get( 'track' ),
				name : this.get( 'name' ),
				description : this.get( 'description' ),
				speaker : this.get( 'speaker' )
			} );

			this.transitionToRoute('session',session);
		}
	}
});