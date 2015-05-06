module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
    	 tests: {
   		   src: ['jquery.js','todos-better.js'],
      		options: {
        		specs: 'tests/spec/todoSpec.js',
      		}
    	}
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
