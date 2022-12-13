function initMap() {
  const mapProp= {
    center:new google.maps.LatLng(34.053032,-118.243575),
    zoom:20,
    };
  const map = new google.maps.Map(document.getElementById("map"),mapProp);
}