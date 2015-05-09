var submits = Rx.Observable.fromEvent( 'keypresses', input ).
	throttle().
	map( function( e ){
		return e.which
	} ).
	filter( function( key ){
		return key === keys.enter || keys.escape;
	}).
	map().
	reduce().
	...
