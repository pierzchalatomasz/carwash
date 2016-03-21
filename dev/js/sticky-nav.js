/*
** Sticky Nav
*/
module.exports = ( function($) {

  function stickyNav() {
    if( $( window ).scrollTop() >= 380 && !$( ".nav-menu" ).hasClass( "opened" )) {
      $( ".header-wrapper" ).addClass( "fixed" );
    }
    else {
      $( ".header-wrapper" ).removeClass( "fixed" );
    }
  }

  $( window ).scroll( function() {
    stickyNav();
  });

  stickyNav();

})( jQuery )
