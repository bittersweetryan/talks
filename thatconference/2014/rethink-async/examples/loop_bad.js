searchResults = Rx.Observable.fromPromise( 
	$.Ajax(...);
);

searchResults.forEach( function( resp ){
	var names = [];
	for( var i = 1; i < resp.data.length; i++ ){
		var name = data[i].fName + ' ' + data[i].lName;
		names.push( name );
	}
});