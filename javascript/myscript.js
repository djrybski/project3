  function initMap() {
  var fishinglocation = {lat: 41.820579 , lng: -87.821949};
  var map = new google.maps.Map(document.getElementById(“map”), { 
    zoom: 4, 
    center: location
});
    marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
</script>
<script async defer src=“”>https://maps.googleapis.com/maps/api/js?key=AIzaSyBRPLVq-1vIhtQtSXY2rac8322VmXK8J6Q&callback=initMap”></script>
