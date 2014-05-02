App.SessionRoute = Ember.Route.extend({
    model : function(){
        return this.store.find( 'session', params.id );
    }   
} );
