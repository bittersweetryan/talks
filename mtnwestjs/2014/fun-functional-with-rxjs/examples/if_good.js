var keyPresses = O.fromEvent( el, 'click' )
	.filter( function( e ){
		return e.which && e.which === 27;
	});

keyPresses.forEach( function( e ){
	//do something
});