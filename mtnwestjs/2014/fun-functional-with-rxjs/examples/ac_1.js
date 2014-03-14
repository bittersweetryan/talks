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