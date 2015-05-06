searchResults = Rx.Observable.fromPromise( 
	$.Ajax(...);
).map( functioN( resp ){
	return resp.fName + resp.lName;
} );

searchResults.forEach( function( resp ){
	//resp will now be the names array
})