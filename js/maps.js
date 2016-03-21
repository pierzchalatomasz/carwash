/*
**
** Google Maps (#map_canvas)
**
*/

jQuery(document).ready(function() {
  function initialize() {
    var myLatLng = new google.maps.LatLng(43.7726657, 11.2043491);
    var roadAtlasStyles = [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}];

    var mapOptions = {
      zoom: 15,
      center: myLatLng,
      disableDefaultUI: true,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
      }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png',
      title: '',
    });

    var contentString = '<div id="content">'+
    '<div id="bodyContent">'+
    '<h4 class="second-font">CarWash</h4>' +
    '<p><span class="gray text-normal">33, Viale Etruria, Firenze, Italy.</span> <br>Lorem ipsum dolor sit amet incididunt ut labore et dolore psum dolor magna aliqua.</p>'+
    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    var styledMapOptions = {
      name: 'US Road Atlas'
    };

    var usRoadMapType = new google.maps.StyledMapType(
    roadAtlasStyles, styledMapOptions);

    map.mapTypes.set('roadatlas', usRoadMapType);
    map.setMapTypeId('roadatlas');
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
