var movies = Rx.Observable.fromArray[ 'Super Troopers', 'Pulp Fiction', 'Fargo' ];

var boxArts = Rx.Observable.fromArray[ 'http://cdn3.nflximg.net/images/2133/1062133.jpg', 
	'http://cdn0.nflximg.net/images/1040/2341040.jpg', 
	'http://cdn0.nflximg.net/images/6840/3126840.jpg' ]

var moviesWithArt = Rx.Observable.zip( movies, boxarts, function( a, b ){
	return { title : a, boxart : b };
} );