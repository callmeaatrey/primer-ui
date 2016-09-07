/*
* Defining Grunt Tasks
* Written By: Shikher Aatrey
*/

'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			options: {
				sourceMap: true
			},
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'release/css',
					ext: '.min.css'
				}]
			}
		}
	});

	// Load the plugin that requires the 'cssmin' task
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default tasks
	grunt.registerTask('default', ['cssmin']);
};
