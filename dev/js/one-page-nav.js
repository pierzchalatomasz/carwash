/*
** One Page Nav
*/
module.exports = ( function($) {

  $( ".main-menu a" ).click( function(e) {
    var element = $( this ).attr( "href" );
    if( element.indexOf("#") != -1 ) {
      if( $( element ).length ) {
        e.preventDefault();
        $( ".body-inner" ).removeClass( "nav-menu-opened" );
        $( ".body-inner" ).one( "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",  function() {
          $( "html, body" ).animate({
              scrollTop: $( element ).offset().top
          }, 2000, function() {
            window.location.hash = element;
          });
        });


      }
      else {
        var location = window.location.protocol + "//" + window.location.host + window.location.pathname + "index.html";
        if(location[location.length] != "/") {
          var locationArray = location.split("/");
          var newLocation = "";
          for(var i = 0; i < locationArray.length - 1; i++) {
            newLocation += locationArray[i] + "/";
          }
          location = newLocation + element;
        }
        window.location = location;
      }
    }
  });

})( jQuery )
