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
    ])
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDNzHXnxO7i2lHvIufJw9jqta_MWpHyjTg',
        v: '3.24',
        libraries: 'places'
      })
    })
    .controller('MainController', function(HomeFactory, $scope) {
    	  $scope.epics = HomeFactory.query();
    	  $scope.open = function() {
        this.epicList = !this.epicList;
        if (this.epicList == true) {
          document.getElementById("epic-list").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
        }
        else {
          document.getElementById("epic-list").style.width = "0";
          document.getElementById("main").style.marginLeft= "0";
        }
      }
    })

  	function RouterFunction($stateProvider) {
  		$stateProvider
  		.state("epicIndex", {
	      url: "",
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
