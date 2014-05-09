App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend({
	latency : 1000
});

App.Router.map(function() {
  this.resource( 'sessions', { path : 'sessions' }, function(){
  	this.route( 'add' );
  } );
  
  this.route( 'session', { path : 'session/:id'} );

  this.resource( 'speakers', { path : 'speakers' }, function(){
  	this.route( 'speaker', { path : '/:name' } );
  });
});

// App.Router.reopen({
//   location: 'auto'
// });
