App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  this.resource( 'sessions', { path : '/' }, function(){
  	this.route( 'add' );
  } );
  
  this.route( 'session', { path : 'session/:id'} );

  this.resource( 'speakers', { path : 'speakers' }, function(){
  	this.route( 'speaker', { path : '/:name' } );
  });
});