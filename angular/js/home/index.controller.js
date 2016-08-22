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
		HomeIndexControllerFunction
	])

	function HomeIndexControllerFunction(HomeFactory, $scope, GoogleMapApi) {
		$scope.epics = HomeFactory.query();
		$scope.map = { center: { latitude: 40.7128, longitude: -74.0059 }, zoom: 8 };
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
    $scope.options = { scrollwheel: false };
    $scope.markerList = [
      {
        id: 0,
        coords: {
          latitude: 40.7128,
          longitude: -74.0059
        },
        title: "<a href='/#/stories'>me</a>"
      },
      {
        id: 1,
        coords: {
          latitude: 41.7128,
          longitude: -75.0059
        },
        title: "Hello 2"
      },
      {
        id: 2,
        coords: {
          latitude: 42.7128,
          longitude: -76.0059
        },
        title: "Hello 3"
      }
    ]
    $scope.onClick = function(marker, eventName, model) {
      model.show = !model.show;
    }
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
