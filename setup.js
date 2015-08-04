var express		= require( 'express' );
var app			= express();
var server		= require( 'http' ).createServer( app );
var io			= require( 'socket.io' )( server );
var router		= express.Router();

module.exports = {

	express: express,
	app: app,
	server: server,
	io: io,
	router: router

};