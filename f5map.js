var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: -32.926170,
      lng: 151.621681
    }
  });

  // Define the LatLng coordinates for the polygon.
  var myCoordinates = [
    new google.maps.LatLng(-32.921241, 151.702137),
    new google.maps.LatLng(-32.915188, 151.679993),
    new google.maps.LatLng(-32.915621, 151.679134),
    new google.maps.LatLng(-32.913171, 151.661282),
    new google.maps.LatLng(-32.911586, 151.652184),
    new google.maps.LatLng(-32.911009, 151.646004),
    new google.maps.LatLng(-32.904812, 151.632614),
    new google.maps.LatLng(-32.903803, 151.629696),
    new google.maps.LatLng(-32.903227, 151.626263),
    new google.maps.LatLng(-32.903227, 151.621456),
    new google.maps.LatLng(-32.901497, 151.615276),
    new google.maps.LatLng(-32.898759, 151.610985),
    new google.maps.LatLng(-32.894435, 151.606178),
    new google.maps.LatLng(-32.889822, 151.601028),
    new google.maps.LatLng(-32.891984, 151.598454),
    new google.maps.LatLng(-32.893858, 151.594849),
    new google.maps.LatLng(-32.895155, 151.590214),
    new google.maps.LatLng(-32.895876, 151.583347),
    new google.maps.LatLng(-32.896164, 151.576653),
    new google.maps.LatLng(-32.897029, 151.572876),
    new google.maps.LatLng(-32.899047, 151.569099),
    new google.maps.LatLng(-32.902362, 151.565666),
    new google.maps.LatLng(-32.906109, 151.563778),
    new google.maps.LatLng(-32.910577, 151.561546),
    new google.maps.LatLng(-32.913459, 151.559143),
    new google.maps.LatLng(-32.916774, 151.555710),
    new google.maps.LatLng(-32.918791, 151.553650),
    new google.maps.LatLng(-32.922970, 151.551247),
    new google.maps.LatLng(-32.926860, 151.550732),
    new google.maps.LatLng(-32.929310, 151.562147),
    new google.maps.LatLng(-32.931399, 151.575279),
    new google.maps.LatLng(-32.931039, 151.577854),
    new google.maps.LatLng(-32.934641, 151.581116),
    new google.maps.LatLng(-32.938386, 151.584892),
    new google.maps.LatLng(-32.939179, 151.590214),
    new google.maps.LatLng(-32.938602, 151.593304),
    new google.maps.LatLng(-32.937666, 151.594849),
    new google.maps.LatLng(-32.937162, 151.596308),
    new google.maps.LatLng(-32.937018, 151.598454),
    new google.maps.LatLng(-32.937162, 151.598883),
    new google.maps.LatLng(-32.935289, 151.599655),
    new google.maps.LatLng(-32.934857, 151.598196),
    new google.maps.LatLng(-32.933992, 151.597509),
    new google.maps.LatLng(-32.932840, 151.598282),
    new google.maps.LatLng(-32.931687, 151.599569),
    new google.maps.LatLng(-32.930678, 151.599913),
    new google.maps.LatLng(-32.929238, 151.601543),
    new google.maps.LatLng(-32.927797, 151.602230),
    new google.maps.LatLng(-32.928085, 151.603432),
    new google.maps.LatLng(-32.929670, 151.604633),
    new google.maps.LatLng(-32.930750, 151.606350),
    new google.maps.LatLng(-32.931255, 151.608238),
    new google.maps.LatLng(-32.931975, 151.610556),
    new google.maps.LatLng(-32.931183, 151.613474),
    new google.maps.LatLng(-32.933848, 151.618109),
    new google.maps.LatLng(-32.933776, 151.623087),
    new google.maps.LatLng(-32.936153, 151.624031),
    new google.maps.LatLng(-32.938386, 151.623173),
    new google.maps.LatLng(-32.941124, 151.622057),
    new google.maps.LatLng(-32.943068, 151.621542),
    new google.maps.LatLng(-32.942348, 151.624374),
    new google.maps.LatLng(-32.938819, 151.630383),
    new google.maps.LatLng(-32.944725, 151.649523),
    new google.maps.LatLng(-32.947030, 151.652527),
    new google.maps.LatLng(-32.948687, 151.662226),
    new google.maps.LatLng(-32.952000, 151.661797),
    new google.maps.LatLng(-32.953584, 151.669521),
    new google.maps.LatLng(-32.952288, 151.674070),
    new google.maps.LatLng(-32.952792, 151.686001),
    new google.maps.LatLng(-32.946022, 151.685829),
    new google.maps.LatLng(-32.937666, 151.689520),
    new google.maps.LatLng(-32.935217, 151.689091),
    new google.maps.LatLng(-32.934064, 151.689434),
    new google.maps.LatLng(-32.932191, 151.690722),
    new google.maps.LatLng(-32.929454, 151.693039),
    new google.maps.LatLng(-32.927725, 151.695013),
    new google.maps.LatLng(-32.926500, 151.695957),
    new google.maps.LatLng(-32.925491, 151.696301),
    new google.maps.LatLng(-32.924483, 151.697159),
    new google.maps.LatLng(-32.923546, 151.698532),
    new google.maps.LatLng(-32.922898, 151.700249),
    new google.maps.LatLng(-32.922177, 151.701365),
    new google.maps.LatLng(-32.921313, 151.702137)
  ];

  var f5locations = [
    new google.maps.LatLng(-32.928974, 151.7626137),
    new google.maps.LatLng(-32.940204, 151.7078751),
    new google.maps.LatLng(-32.760463, 151.5876635),
    new google.maps.LatLng(-32.9631767, 151.6555606),
    new google.maps.LatLng(-32.9121865, 151.7349957),
    new google.maps.LatLng(-32.9870082, 151.6922975),
    new google.maps.LatLng(-32.9008688, 151.6671634),
    new google.maps.LatLng(-32.8107903, 151.4764369),
    new google.maps.LatLng(-33.0229524, 151.6008132),
    new google.maps.LatLng(-33.0142896, 151.5113744),
    new google.maps.LatLng(-32.9407185, 151.6495504)
  ]

  var polyOptions = {
    path: myCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.1
  }
  var it = new google.maps.Polygon(polyOptions);
  
  for (i = 0; i < f5locations.length; i++)
    {
      new google.maps.Marker({
        position: f5locations[i],
        map: map
      });
    }

  it.setMap(map);
}