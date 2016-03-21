/*
** jscrollpane
*/
module.exports = ( function($) {

  $( ".scroll-pane" ).jScrollPane();
  $( window ).resize( function() {
    $( ".scroll-pane" ).jScrollPane();
  });

})( jQuery )
