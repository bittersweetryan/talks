'use strict';

var globs = require( '../../config/globs.json' );
var react = require('gulp-react');

module.exports = function( gulp ){
    return function(){
        return gulp.src( globs.js.src )
            .pipe( react( { harmony: true } ) )
            .pipe( gulp.dest( globs.js.dest ) );
    };
};
