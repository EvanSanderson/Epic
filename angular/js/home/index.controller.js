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
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	}
}())