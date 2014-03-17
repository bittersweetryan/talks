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
			document.querySelector( '.search-results.visible' ) || document.querySelector( '.search-results.previous' ),
			'out'
		);
	}
);

animateIns = searchResultsSets.map( 
	function( resultSet ){
		var hiddenDiv = document.querySelector( '.search-results.next.off-right' );

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

		if( direction === 'in' ){
			
			div.classList.remove( 'hidden' );
			div.classList.remove( 'off-right' );
			div.classList.remove( 'next' );
			div.classList.add( 'visible' );
		}
		else{

			console.log( div, 'out' );
			div.classList.add( 'hidden' );
			div.classList.add( 'off-left' );
			div.classList.add( 'next' );
			div.classList.remove( 'previous' );
			
		}

		if( div.classList.contains( 'hidden' ) && direction === 'out' ){
			onComplete();
		}
		else{	
			div.addEventListener( 'transitionend', onComplete);
			div.addEventListener( 'webkitAnimationEnd', onComplete);
		}

		function onComplete(){
			console.log( 'such wow' );
			
			if( direction === 'out' ){
				div.classList.remove( 'off-left' );
				div.classList.add( 'off-right' );
			}

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
