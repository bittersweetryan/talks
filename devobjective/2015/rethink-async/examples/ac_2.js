var noResults = keyups.
	filter( function( ) {
		return input.value.length <= 1;
	} ).
	forEach( function(){
		console.log( 'no results' );
		$( '.search-results' ).addClass( 'hidden' );
	});