var gulp  = require( 'gulp' ),
	jasmine = require( 'gulp-jasmine' );

gulp.task( 'watch-tests', function(){
	gulp.watch( ['tests/spec/**/*Spec.js', './todos-better.js' ], function(){
		gulp.src( ['./todos-better.js', 'tests/spec/todoSpec.js']  )
			.pipe( jasmine( ) )
			.on( 'error', console.log );
	});
} );