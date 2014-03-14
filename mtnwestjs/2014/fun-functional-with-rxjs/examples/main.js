require.config( {
	paths : {
		'rx' : 'bower_components/rxjs/rx',
		'rx.async' : 'bower_components/rxjs/rx.async',
		'rx.binding' : 'bower_components/rxjs/rx.binding'
	},
	shim : {
		'rx' : {
			exports : 'Rx'
		},
		'rx.async' : {
			deps : [ 'rx', 'rx.binding' ]
		}
	},
} );

require( [ 'rx', 'map' ], function( map ){

});