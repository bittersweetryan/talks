module.exports = function( grunt ){
  
  grunt.initConfig( {
    jasmine : {
      all : {
        src : 'sample/js/*.js',
        options : {
          specs : 'sample/grunt/spec/*.js'
        }
      }
    },
    watch : {
      tests : {
        files : ['sample/js/*.js', 'sample/grunt/spec/*.js'],
        tasks : ['jasmine']
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-jasmine' );
};
