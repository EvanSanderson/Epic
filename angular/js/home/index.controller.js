"use strict";

(function() {
  angular
    .module("home")
    .controller("HomeIndexController", [
        "HomeFactory",
        '$scope',
        HomeIndexControllerFunction
    ])

<<<<<<< HEAD
    function HomeIndexControllerFunction(HomeFactory, $scope) {
      $scope.epics = HomeFactory.query();
      // Google Map Styling
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
        $scope.map = { center: { 
          latitude: 48,
          longitude: 14 },
          zoom: 2,
          markers: [48.210033, 16.363449],
          events: {
            click:  function (map, eventName, originalEventArgs) {
              var e = originalEventArgs[0];
              var lat = e.latLng.lat(),lon = e.latLng.lng();
              var marker = {
                id: Date.now(),
                coords: {
                  latitude: lat,
                  longitude: lon
                }
              };
              $scope.map.markers.push(marker);
              $scope.$apply();
            }}}
      $scope.options = { styles: stylesArray }
      $scope.marker = {
        id: 0,
        coords: {
          latitude: 40.1451,
          longitude: -99.6680
        },
        options: { draggable: false,
          icon:'shadowPin.png',
        },
          events: {
            dragend: function (marker, eventName, args) {
              $log.log('marker dragend');
              var lat = marker.getPosition().lat();
              var lon = marker.getPosition().lng();
              $log.log(lat);
              $log.log(lon);
            }}};
      $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
        if (_.isEqual(newVal, oldVal))
          return;
        $scope.coordsUpdates++;
      });
      $scope.icon = {
        scaledSize: [5, 5]
      }}
=======
	function HomeIndexControllerFunction(HomeFactory, $scope) {
		$scope.epics = HomeFactory.query();
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

		this.update = function(epic) {
			this.epic = epic;
			console.log(this.epic)
			this.epic.$update({id: epic.id})
		}

		this.delete = function(epic) {
			this.epic = epic;
			this.epic.$delete({id: epic.id})
		}
	}
>>>>>>> a6d896e68f94af4e7ddb7bdba843cb956761017e
}())
