// Map Style \\
console.log("map style");
var stylesArray =[
  // Natural landmass
{ "featureType": "landscape.natural",
  "elementType": "geometry",
  "stylers": [
    // Dark Orange
  { "hue": "#6d5906" },
  { "saturation": 1 },
  { "lightness": -4 },
  { "gamma": 0.22 }
  ]},
  // Removing Road Icons
{ "featureType": "road",
  "elementType": "labels.icon"
},
  // Man Made Land
{ "featureType": "landscape.man_made",
  "elementType": "geometry",
  "stylers": [
    // Blue
  { "hue": "#0077ff" },
  { "gamma": 3.1 }
  ]},
  // Ocean color
{ "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [
    // Dark greenish/blue
  { "hue": "#1d666d" },
  { "gamma": 0.1 },
  { "saturation": -33 }
  ]},
  // Parks
{ "featureType": "poi.park",
  "stylers": [
  { "hue": "#44ff00" },
  { "saturation": -23 }
  ]},

{ "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
  { "hue": "#40776e" },
  { "gamma": 0.77 },
  { "saturation": 65 },
  { "lightness": 99 }
  ]},
{ "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [
  { "gamma": 0.11 },
  { "weight": 5.6 },
  { "saturation": 99 },
  { "hue": "#40776e" },
  { "lightness": -86 }
  ]},
{ "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
  { "lightness": -48 },
  { "hue": "#ff5e00" },
  { "gamma": 1.2 },
  { "saturation": -23 }
  ]},
{"featureType": "road",
  "elementType": "labels.icon",
  "stylers": [
  {visibility: "off"}
  ]},
{"featureType": "road",
  "stylers": [
  {"hue": "#111111"},
  {"gamma": .3}
  ]},
{ "featureType": "transit",
  "elementType": "labels.text.stroke",
  "stylers": [
  { "saturation": -64 },
  { "hue": "#111111" },
  { "lightness": 16 },
  { "gamma": 0.47 },
  { "weight": 2.7 }
  ]}

  ]
