// create a driver DOM element
function getDriverElem( driverName, imageURL ) {
    // driver container (div)
    var container = document.createElement( 'div' );
    container.classList.add( 'app__drivers__item' );

    // driver image (div>img)
    var image = document.createElement( 'img' );
    image.classList.add( 'app__drivers__item__image' );
    image.setAttribute( 'src', imageURL );
    container.appendChild( image );

    // driver title (div>p)
    var title = document.createElement( 'p' );
    title.classList.add( 'app__drivers__item__title' );
    title.innerText = driverName;
    container.appendChild( title );

    return container;
}

// fetch images and update DOM
fetch( '/api/images' )
.then( response => response.json() )
.then( drivers => {
    const driversElem = document.getElementById( 'drivers' );
    drivers.forEach( driver => {
        var driverElem = getDriverElem( driver.title, driver.url );
        driversElem.appendChild( driverElem );
    } );
} )
.catch( console.warn );