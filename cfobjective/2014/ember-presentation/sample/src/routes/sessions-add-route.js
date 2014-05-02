App.SessionsAddRoute = Ember.Route.extend({
	model : function(){
		return {
			speakers : this.store.find( 'speaker' ),
			tracks : ['JS','Architecture']
		};
	}
});