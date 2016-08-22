"use strict";

(function() {
  angular
    .module('epic', [
        "ui.router",
        "story",
        "home",
    ])
    .config([
        "$stateProvider",
        RouterFunction
    ])
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDNzHXnxO7i2lHvIufJw9jqta_MWpHyjTg',
        v: '3.24',
        libraries: 'places',
      });
    })

  	function RouterFunction($stateProvider) {
  		$stateProvider
  		.state("epicIndex", {
	      url: "/",
	      templateUrl: "js/home/index.html",
	      controller: "HomeIndexController",
	      controllerAs: "HomeIndexCtrl"
   	})
		.state("epicNew", {
			url: "/epics/new",
			templateUrl: "js/home/new.html",
			controller: "HomeNewController",
			controllerAs: "HomeNewCtrl"
		})
		.state("epicShow", {
			url: "/epics/:id",
			templateUrl: "js/home/show.html",
			controller: "HomeShowController",
			controllerAs: "HomeShowCtrl"
		})
   	.state("storyIndex", {
	      url: "/stories",
	      templateUrl: "js/story/index.html",
	      controller: "StoryIndexController",
	      controllerAs: "StoryIndexCtrl"
   	})
		.state("storyNew", {
			url: "/stories/new",
			templateUrl: "js/story/new.html",
			controller: "StoryNewController",
			controllerAs: "StoryNewCtrl"
		})
  	}
}())
