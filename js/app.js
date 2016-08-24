"use strict";

(function() {
  angular
    .module('epic', [
        "ui.router",
        "story",
        "home",
        "ngAnimate"
    ])
    .config([
        "$stateProvider",
        "uiGmapGoogleMapApiProvider",
        GoogleMap,
        RouterFunction
    ])
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

    function GoogleMap(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDNzHXnxO7i2lHvIufJw9jqta_MWpHyjTg',
        v: '3.24',
        libraries: 'places'
      })
    }

  	function RouterFunction($stateProvider) {
  		$stateProvider
  		.state("epicIndex", {
	      url: "/Epic",
	      templateUrl: "js/home/index.html",
	      controller: "HomeIndexController",
	      controllerAs: "HomeIndexCtrl"
   	})
		.state("epicShow", {
			url: "/epic/:id",
			templateUrl: "js/home/show.html",
			controller: "HomeShowController",
			controllerAs: "HomeShowCtrl"
		})
    .state("otherwise", {
      url : "*path",
      templateUrl: "js/home/index.html",
      controller: "HomeIndexController",
      controllerAs: "HomeIndexCtrl"
    });
  	}
}())
