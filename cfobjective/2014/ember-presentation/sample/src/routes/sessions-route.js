App.SessionsIndexRoute = Ember.Route.extend({
  model: function() { 
    return this.store.find( 'session' );
  }
});