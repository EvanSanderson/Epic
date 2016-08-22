"use strict";

(function() {
  angular
    .module("home")
		.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
	    GoogleMapApi.configure({
	      key: 'AIzaSyDNzHXnxO7i2lHvIufJw9jqta_MWpHyjTg',
	      v: '3.25',
	      libraries: 'places'
	    });
	  }])
    .controller("HomeIndexController", [
        "HomeFactory",
        '$scope',
				'uiGmapGoogleMapApi',
        '$state',
        HomeIndexControllerFunction
    ])

    function HomeIndexControllerFunction(HomeFactory, $scope, GoogleMapApi, $state) {
      // Epic data \\
      $scope.epics = HomeFactory.query();
      this.update = function(epic) {
        this.toggleEdit(epic);
        this.epic = epic;
        console.log(this.epic)
          this.epic.$update({id: epic.id})
      }

      this.delete = function(epic) {
        this.toggleEdit(epic);
        this.epic = epic;
        this.epic.$delete({id: epic.id}).then(function(){
          $state.transitionTo('epicIndex', null, {reload: true});
        })
      }

      this.toggleEdit = function(epic){
        epic.showEdit = !epic.showEdit;
      }
      // Google Maps Data \\
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
        // How the map appears on rendering
        $scope.map = { center: {
          latitude: 18,
          longitude: -30},
          zoom: 3,
        }
      // Map Styles
      $scope.options = {
        styles: stylesArray,
        options: {
          draggable: true,
          minZoom: 3,
        },
      },
      // Marker Locations
      $scope.markers = [{
        id: 0,
        title: "<a href='/#/stories'>New York</a>",
        coords: {
          latitude: 40.7128,
          longitude: -74.0059
        }},
      {id: 1,
        title: "San Diego",
        coords: {
          latitude: 32.7157,
          longitude: -117.1611
        }
      }]
      // Custom Icon
      $scope.markersOptions = {
        options: {draggable: false,
          icon:{
            url: 'shadowPin.png',
            scaledSize: {width: 40, height: 40}
          },
        }
      }
      // Event for marker clicks
      $scope.markerClick = {
        function(model, eventName, marker, args){
          model.show = true;
          $scope.$apply();
        }
      }


    $scope.searchbox = {
      template:'searchbox.tpl.html',
      events: {
        places_changed: function (searchBox) {
          console.log(searchBox)
          console.log(searchBox.gm_accessors_.places.Qc.formattedPrediction)
          console.log("Long " + searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].geometry
.viewport.b.f)
          console.log("Lat " + searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].geometry
.viewport.f.b)
          console.log(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].url)
          // $scope.markerList.push()
        }
      }
    };



		// update and delete
		$scope.update = function(epic) {
			$scope.epic = epic;
			console.log($scope.epic)
			$scope.epic.$update({id: epic.id})
		}
		$scope.delete = function(epic) {
			$scope.epic = epic;
			$scope.epic.$delete({id: epic.id})
		}

	}

}())
