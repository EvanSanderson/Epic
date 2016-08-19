"use strict";

(function() {
	angular
	.module('epic', [
		"ui.router",
		"story",
		"home"
	])
	.config([
   	"$stateProvider",
   	RouterFunction
  	]);

  	function RouterFunction($stateProvider) {
  		$stateProvider
  		.state("epicIndex", {
	      url: "/",
	      templateUrl: "js/home/index.html",
	      controller: "HomeIndexController",
	      controllerAs: "HomeIndexCtrl"
   	})
   	.state("storyIndex", {
	      url: "/stories",
	      templateUrl: "js/story/index.html",
	      controller: "StoryIndexController",
	      controllerAs: "StoryIndexCtrl"
   	})
  	}
}())