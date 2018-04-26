  function initMap() {
  var location = {lat: 41.820579 , lng: -87.821949};
  var map = new google.maps.Map(document.getElementById('map'), { 
    zoom: 15, 
    center: location
});
    marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
$(document).ready(function(){
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 800,
        responsive: true
    });
  });
