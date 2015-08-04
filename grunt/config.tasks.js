// Register tasks
	
grunt.registerTask( 'noop', 'Empty task.', function() {} );	

// Default tasks

grunt.registerTask( 'default',	[

	'less:dev',
	'concat',
	'shell:mongo',
	'shell:app',
	'watch',

] );

grunt.registerTask( 'build',	[

	'clean',
	'less:dist',
	'concat',
	'uglify',

] );

grunt.registerTask( 'kill',	[

	'shell:kill',

] );