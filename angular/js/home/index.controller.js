"use strict";

(function() {
	angular
	.module("home")
	.controller("HomeIndexController", [
		HomeIndexControllerFunction
	])

	function HomeIndexControllerFunction() {
		console.log("Hello from HomeIndexController");
	}
}())