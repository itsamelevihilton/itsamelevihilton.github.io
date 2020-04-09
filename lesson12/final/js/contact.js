var office = {lat: 45.418167, lng: -116.317760};
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: office,
    zoom: 13
  });
  var marker = new google.maps.Marker({position: office, map: map});
}