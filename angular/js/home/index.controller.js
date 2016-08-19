"use strict";

(function() {
	angular
	.module("home")
	.controller("HomeIndexController", [
		'$scope',
		HomeIndexControllerFunction
	])

	function HomeIndexControllerFunction($scope) {
		console.log("Hello from HomeIndexController");
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	}
}())