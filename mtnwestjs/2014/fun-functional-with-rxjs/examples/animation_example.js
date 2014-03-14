var Observable = Rx.Observable,
		input = document.querySelector( '.search-input' );
		keyups = Observable.fromEvent( input , 'keyup');

var searchResultsSets = keyups.
	filter( function (  ){
		return input.value.length > 1;
	}).
	map( function( evt ){
		return Observable.fromPromise( 
			$.getJSON( 'https://api.github.com/search/repositories?q=' + input.value + 'language:javascript' )
		); 
	}).
	share().
	switchLatest().
	map( function( results ){
		return _.first( results.items, 10 ).map( function( item ){
			return {
				name : item.name,
				url  : item.url
			};
		});
	});

var noResults = keyups.
	filter( function( ) {
		return input.value.length <= 1;
	} ).
	forEach( function(){
		console.log( 'no results' );
		$( '.search-results' ).addClass( 'hidden' );
	});

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

var animations = animateOuts.merge(animateIns).concatAll();

animations.forEach( function( animate ){

	return true;
} );

function addResultsToDiv( results, div ){

	var html = results.reduce( function( prev,curr ) {
		return prev + '<li>' + curr.name + '</li>';
	},'' );

	div.innerHTML = html;
}

function SlideableDiv( div, direction ){
	return Observable.create( function( observer ){

		console.log( direction );

		if(  !div || ( div.classList.contains( '.hidden' ) && direction === 'out' ) ) {
			onComplete();
			return observer.onNext();
		} 

		if( direction === 'in' ){
			div.classList.remove( 'off-right' );
			div.classList.remove( 'next' );
			div.classList.remove( 'hidden' );
			div.classList.add( 'visible' );
		}
		else{
			div.classList.add( 'hidden' );
			div.classList.add( 'off-left' );
		}

		div.addEventListener( 'transitionend', onComplete);
		div.addEventListener( 'webkitAnimationEnd', onComplete);

		function onComplete(){
			console.log( 'such wow' );
			observer.onCompleted( );
		}
						
		observer.onNext( );

		return function(){
			div.removeEventListener( 'transitioned', function(){
				console.log( 'animation removed' );
			} );
		} ;    
	} );
}
