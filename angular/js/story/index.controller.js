"use strict";

(function() {
	angular
	.module("story")
	.controller("StoryIndexController", [
		"StoryFactory",
		"$scope",
		StoryIndexControllerFunction
	])

	function StoryIndexControllerFunction(StoryFactory, $scope) {
		$scope.stories = StoryFactory.query();
	}
}())
