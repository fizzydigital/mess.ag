/*! (c) 2014 John Przeslakowski | Code released under the MIT license | goodpixels.co.uk */

// Load Grunt.js

grunt = require( 'grunt' );

// Load config files

require( './grunt/config.variables.js' );
require( './grunt/config.tasks.js' );

// Load module settings

require( './grunt/config.settings.js' );

// Load Grunt modules

require( 'load-grunt-tasks' )( grunt, { pattern: [ 'grunt-*', 'assemble' ] } );