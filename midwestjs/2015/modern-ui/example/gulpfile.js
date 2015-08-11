'use strict';

var gulp = require( 'gulp' );
var js = require( './build_tasks/js/index' )(gulp);

gulp.task( 'default', js );
