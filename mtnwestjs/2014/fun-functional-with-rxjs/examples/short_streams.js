var submits = Rx.Observable.fromEvent( 'keypresses', input ).
	throttle().
	map( function( e ){
		return e.which
	} );

var enters = submits.filter( function( key ) ){
	return e.which === keys.enter;
}

var escapes = submits.filter( function( key ) ){
	return e.which === keys.escape;
}