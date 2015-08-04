// Append some variables

grunt.config.merge( {

	pkg:		grunt.file.readJSON( 'package.json' ),
	project:	grunt.file.readJSON( 'grunt/project.json' ),	

} );