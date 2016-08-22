"use strict";

(function() {
	angular
	.module("home")
	.controller("HomeIndexController", [
		"HomeFactory",
		'$scope',
		HomeIndexControllerFunction
	])

	function HomeIndexControllerFunction(HomeFactory, $scope) {
		$scope.epics = HomeFactory.query();
		$scope.map = { center: { latitude: 40.7128, longitude: -74.0059 }, zoom: 8 };
		$scope.marker = {
      id: 0,
      coords: {
        latitude: 40.7128,
        longitude: -74.0059
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
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
