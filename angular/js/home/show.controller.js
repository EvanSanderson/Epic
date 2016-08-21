"use strict";

(function(){
  angular
    .module("home")
    .controller("HomeShowController", [
      "$stateParams",
      "HomeFactory",
      HomeShowControllerFunction
    ])

    function HomeShowControllerFunction($stateParams, HomeFactory){
      this.epic = HomeFactory.get({id: $stateParams.id})

    }
})()
