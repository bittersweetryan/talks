var movies = Rx.Observable.fromArray( [
  {
    title : 'Super Troopers',
    boxarts : [ { width : 80, height : 120 , url : 'http://...' },
               { width: 120, height : 320 , url : 'http://...' } ]
  }
] );

moviesWithBoxarts = movies.map( function( movie ){
  return movie.boxarts.filter( function( boxart ){
      return boxart.width === 120;
  } ).
  map( function( boxart ){
    return {
      title : movie.title,
      boxartUrl : boxart.url
    };
  });
} );