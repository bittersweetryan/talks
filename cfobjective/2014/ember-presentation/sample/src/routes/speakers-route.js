App.SpeakersRoute = Ember.Route.extend({
	model : function(){
		return this.store.find( 'speaker' );
	}
} );