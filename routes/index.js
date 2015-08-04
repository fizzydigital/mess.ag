var io				= require( '../setup' ).io;
var router			= require( '../setup' ).router;
var marked			= require( 'marked' );
var _				= require( 'underscore' );

router.route( '/' )
.get( function( req, res, next ) {

	res.render( 'index', { title: 'Home' } );

} );

module.exports = router;