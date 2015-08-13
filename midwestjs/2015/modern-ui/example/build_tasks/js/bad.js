'use strict';

var globs = require( '../../config/globs.json' );
var react = require('gulp-react');
var mocha = require('gulp-mocha');

gulp.task( 'js', function(){
    return gulp.src( globs.js.src )
        .pipe( react( { harmony: true } ) )
        .pipe( gulp.dest( globs.js.dest ) );
} );

gulp.task( 'test', function(){
    return gulp.src( globs.js.src  )
        .pipe( react( { harmony: true } ) )
        .pipe( mocha  )
        .on( 'error', function(){
            ...
        } );
} );
