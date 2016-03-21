/*
**
** Nav Menu
**
*/
module.exports = ( function($) {

  $( "#nav-menu-open").click( function( e ) {
    e.preventDefault();
    if( !$( ".body-inner" ).hasClass( "nav-menu-opened" ) ) {
      $( ".body-inner" ).addClass( "nav-menu-opened" );
    }
    else {
      $( ".body-inner" ).removeClass( "nav-menu-opened" );
    }
  });

  $( "#nav-menu-close").click( function( e ) {
    e.preventDefault();
    $( ".body-inner" ).removeClass( "nav-menu-opened" );
  });

})( jQuery )
