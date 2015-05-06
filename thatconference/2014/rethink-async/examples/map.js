
	var listWithMovies = data.lists.map( function( list ){
		
		return list.movies.map( function( movieId ){
			var movie = data.movies[ movieId ];
			
			return {
				id : movie.summary.id,
				title : movie.summary.title.title_short
			};
		} );
	});
