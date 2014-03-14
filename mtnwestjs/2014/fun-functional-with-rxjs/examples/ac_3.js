animateOuts = searchResultsSets.map( 
	function( resultSet ){
		return new SlideableDiv( 
			document.querySelector( '.search-results.visible' ),
			'out'
		);
	}
);

animateIns = searchResultsSets.map( 
	function( resultSet ){
		var hiddenDiv = document.querySelector( '.search-results.next' );

		addResultsToDiv( resultSet, hiddenDiv );

		return new SlideableDiv( hiddenDiv,'in' );
	}
);