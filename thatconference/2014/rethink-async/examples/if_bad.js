var keyPresses = O.fromEvent( el, 'click' )

keyPresses.forEach( function( e ){
	if( e.which === 27 ){
		//do something
	}
});