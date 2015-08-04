var cfg			= require( './config' );
var MongoClient = require( 'mongodb' ).MongoClient;
var _db;

connect = function( callback ) {
		
	MongoClient.connect( cfg.DB_ADDRESS + ':' + cfg.DB_PORT + '/' + cfg.DB_NAME, function( err, db ) {
	
		_db = db;

		return callback( err );

	} );
};

db = function() { return _db; };

module.exports = { connect: connect, db: db };