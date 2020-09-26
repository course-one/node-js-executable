const path = require( 'path' );
const express = require( 'express' );
const getPort = require( 'get-port' );
const open = require( 'open' );

( async function() {
    
    // create express application
    const app = express();

    // find available port (if not 3000)
    const port = await getPort( { port: 3000 } );
    const host = `http://127.0.0.1:${ port }`;

    /*-------------------*/

    // endpoint to `index.html` as default endpoint
    app.get( '/', ( req, res ) => {
        res.contentType( 'text/html' );
        res.sendFile( path.join( __dirname, './src/www/index.html' ) );
    } );

    // endpoint to serve web assets
    app.use( '/web', express.static( path.join( __dirname, './src/www' ) ) );

    // endpoint to serve images
    app.use( '/files/images', express.static( path.join( __dirname, './src/static/images' ) ) );

    // endpoint to serve `images.json`
    app.get( '/api/images', ( req, res ) => {
        res.contentType( 'application/json' );
        res.sendFile( path.join( __dirname, './src/static/jsons/images.json' ) );
    } );

    /*-------------------*/

    app.listen( port, async () => {
        console.log( 'Express server stared!' );
        await open( `${ host }` ); // opens `web/index.html` page
    } );

} )();