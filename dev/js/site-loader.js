/*
** Site Loader
*/
module.exports = ( function($) {

  $( "body" ).imagesLoaded().done( function( instance ) {
    $( ".site-loader" ).addClass( "loader-hidden" );
  });

})( jQuery )
