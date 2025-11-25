mapboxgl.accessToken =
  "pk.eyJ1IjoibWFjMTk2OCIsImEiOiJjbTJxaXpkMTUweHdwMm9zOXdhM25jdDliIn0.E4pqG8poHmsUuseGo9g4UQ"

  const settings = {
    mobileView: {
      center: [-1.08097,53.96042],
      zoom: 5.5
    },
    desktopView: {
      center: [-1.08097,53.96042],
      zoom: 8
    }
  }

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

  function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

  function errorLocation() {
  setupMap([-1.0739, 53.9614])
}

  function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-1.08086,53.96101],
    zoom: 13
  })
  map.scrollZoom.disable();

  const marker1 = new mapboxgl.Marker()
        .setLngLat([-1.08204,53.96225])
        .setPopup(new mapboxgl.Popup().setHTML("<h2>York Minster</h2>"))
        .addTo(map);

  const marker2 = new mapboxgl.Marker()
        .setLngLat([-1.08028,53.95732])
        .setPopup(new mapboxgl.Popup().setHTML("<h2>Jorvik Viking Museum</h2>"))
        .addTo(map);      

  const marker3 = new mapboxgl.Marker()
        .setLngLat([-1.07999,53.95924])
        .setPopup(new mapboxgl.Popup().setHTML("<h2>Shambles</h2>"))
        .addTo(map); 
        
  const marker4 = new mapboxgl.Marker()
        .setLngLat([-1.09677,53.95971])
        .setPopup(new mapboxgl.Popup().setHTML("<h2>Railway Museum</h2>"))
        .addTo(map);

  const marker5 = new mapboxgl.Marker()
        .setLngLat([-1.08013,53.95574])
        .setPopup(new mapboxgl.Popup().setHTML("<h2>Clifford Tower</h2>"))
        .addTo(map);
  
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken})

  map.addControl(directions, "top-left")
}
