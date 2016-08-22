"use strict";

(function(){
  angular
    .module("home")
    .controller("HomeShowController", [
      "$stateParams",
      "$scope",
      "HomeFactory",
      HomeShowControllerFunction
    ])

    function HomeShowControllerFunction($stateParams, $scope, HomeFactory){
      $scope.epic = HomeFactory.get({id: $stateParams.id})
    }
})()
