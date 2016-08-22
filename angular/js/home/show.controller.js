"use strict";

(function(){
  angular
    .module("home")
    .controller("HomeShowController", [
      "$stateParams",
      "HomeFactory",
      "StoryFactory",
      "$scope",
      HomeShowControllerFunction
    ])

    function HomeShowControllerFunction($stateParams, HomeFactory, StoryFactory, $scope){
      $scope.epic = HomeFactory.get({id: $stateParams.id})
      $scope.stories = []
      StoryFactory.query().$promise.then(function(results) {
          angular.forEach(results, function(result) {
            console.log(result.epic_id)
            console.log($stateParams.id)
            if(result.epic_id == $stateParams.id)
              $scope.stories.push(result)
          })
      })
      console.log($scope.stories)
    }
})()
