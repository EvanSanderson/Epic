"use strict";

(function() {
	angular
	.module("story")
	.controller("StoryIndexController", [
		StoryIndexControllerFunction
	])

	function StoryIndexControllerFunction() {
		console.log("Hello from StoryIndexController");
	}
}())