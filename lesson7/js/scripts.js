WebFont.load({
  google: {
      families: [
          'Montserrat'
      ]
  }
});

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

var mod = moment(new Date(document.lastModified));
document.getElementById("date").innerText = mod.format('dddd, DD MMMM YYYY');

var office = {lat: 42.0970234, lng: -111.8735843};
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: office,
    zoom: 13
  });
  var marker = new google.maps.Marker({position: office, map: map});
}