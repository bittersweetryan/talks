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
        return results.items;
    })
    .take( 10 );
