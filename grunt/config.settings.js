grunt.config.merge( {

	shell: {
	
		kill: {

			command: 'mongo --port 4000 --eval "db.getSiblingDB(\'admin\').shutdownServer()"',
		
			options: {
			
				async: false
			
			}

		},

		mongo: {

			command: 'bash mongo.sh',
		
			options: {
			
				async: true
			
			}

		},

		app: {

			command: 'node app.js',
		
			options: {
			
				async: true
			
			}

		}

	},

	// Compile LESS
	
	less: {

		dev: {

			options: {

				paths:				[ '<%= project.paths.less %>' ],
				sourceMap:			true,
				sourceMapFilename: 	'<%= project.paths.assets %>/css/style.css.map',
				sourceMapURL:		'style.css.map',

			
			},

			files: {

				'<%= project.paths.assets %>/css/style.css': [ '<%= project.paths.less %>/style.less' ],

			}


		},

		dist: {

			options: {

				cleancss:	true,
				paths:		[ '<%= project.paths.less %>' ],
			
			},

			files: {

				'<%= project.paths.assets %>/css/style.css': [ '<%= project.paths.less %>/style.less' ],

			}

		},

	},

	// Merge JS files

	concat: {

		lib: {

			dest: '<%= project.paths.assets %>/js/lib.js',

			src: [

				'<%= project.paths.node %>/jquery/dist/jquery.js',
				'<%= project.paths.node %>/bootstrap/dist/js/bootstrap.js',
				'<%= project.paths.node %>/underscore/underscore.js',
				'<%= project.paths.node %>/backbone/backbone.js',
				'<%= project.paths.node %>/express-secure-handlebars/node_modules/handlebars/dist/handlebars.js',
				'<%= project.paths.node %>/socket.io/node_modules/socket.io-client/socket.io.js',
				'<%= project.paths.node %>/flickity/dist/flickity.pkgd.js',

			],
		
		},

		js: {

			dest: '<%= project.paths.assets %>/js/script.js',

			src: [

				'<%= project.paths.js %>/script.js',

			],
		
		}

	},

	// Compress JS

	uglify: {

		dist: {

			options: {

				preserveComments:	'some',
				mangle:				true,
				compress: {

					sequences:		true,
					dead_code:		true,
					conditionals:	true,
					booleans:		true,
					unused:			true,
					if_return:		true,
					join_vars:		true,
					drop_console:	true,

				}

			},

			files: {

				'<%= project.paths.assets %>/js/lib.js':		[ '<%= project.paths.assets %>/js/lib.js' ],
				'<%= project.paths.assets %>/js/script.js':		[ '<%= project.paths.assets %>/js/script.js' ],

			}

		}

	},

	// Watch file changes

	watch: {

		options: { livereload: true },

		views: {

			files: [ '<%= project.paths.views %>/**/*.hbs' ],

			tasks: [ 'noop' ],
		
		},

		routes: {

			files: [ '<%= project.paths.routes %>/**/*.js' ],

			tasks: [ 'noop' ],
		
		},

		styles: {

			files: [ '<%= project.paths.less %>/**/*.less' ],
			tasks: [ 'less:dev', 'notify:css' ],
		
		},

		scripts: {

			files: [ '<%= project.paths.js %>/**/*.js' ],
			tasks: [ 'concat', 'notify:js' ],

		}

	},

	// Clean repo

	clean: {

		assets: [

			'<%= project.paths.assets %>/js',
			'<%= project.paths.assets %>/css',

		],

		// fonts: [
			
		// 	'<%= project.paths.fonts %>/icons',
		// 	'<%= project.paths.fonts %>/*.*',

		// ],

		other: [ '**/.DS_Store' ],

	},

	// Notifications
	
	notify: {
		
		js: {
		
			options: {
			
				title:		'<%= project.name %>',					
				message:	'JavaScript finished compiling.',
			
			}

		},

		css: {
		
			options: {
			
				title:		'<%= project.name %>',					
				message:	'LESS finished compiling.',
			
			}

		}
	
	},

} );