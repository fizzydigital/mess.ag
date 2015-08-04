var path				= require( 'path' );
var logger				= require( 'morgan' );
var cookieParser		= require( 'cookie-parser' );
var bodyParser			= require( 'body-parser' );
var exphbs				= require( 'express-secure-handlebars' );

var cfg					= require( './config' );
var db					= require( './db' );
var express				= require( './setup' ).express;
var app					= require( './setup' ).app;
var server				= require( './setup' ).server;
var io					= require( './setup' ).io;
var router				= require( './setup' ).router;

var routes				= require( './routes/index' );

// View engine setup

app.engine( '.hbs' , exphbs( { defaultLayout: 'main', extname: '.hbs' } ) );
app.set( 'view engine', '.hbs' );
app.set( 'views', path.join( __dirname, 'views' ) );

app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// Mongo

app.use( function( req, res, next ) {

  console.log( 'Attaching MongoDB instance' );
  
  req.db = db.db();

  next();

} );

// Routes

app.use( '/', routes );

// Catch 404 and forward to error handler

app.use( function( req, res, next ) {

  var err = new Error( 'Not Found' );

  err.status = 404;

  next( err );

}  );

// Error handler

if( app.get( 'env' ) === 'development' ) {
  
  app.use( function( err, req, res, next ) {

	res.status( err.status || 500 );

	res.render( 'error', {

	  message: err.message,
	  error: err

	} );

  } );

}

// Connect to the database

db.connect( function( err ) {

  if( err ) {
  
	console.log( 'Unable to connect to Mongo.' );
	process.exit( 1 );

  }

  else {

	server.listen( cfg.HTTP_PORT );

	var host = server.address().address;
	var port = server.address().port;

	console.log( 'App listening at http://%s:%s', host, port );

  }

} );

module.exports = app;