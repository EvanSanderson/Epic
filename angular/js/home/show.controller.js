"use strict";

(function(){
  angular
    .module("home")
    .controller("HomeShowController", [
      "$stateParams",
      "HomeFactory",
      "StoryFactory",
      "$scope",
      "$state",
      HomeShowControllerFunction
    ])

    function HomeShowControllerFunction($stateParams, HomeFactory, StoryFactory, $scope, $state){
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
      this.story = new StoryFactory();
      console.log(this)
      this.create = function(){
        this.story.epic_id = $stateParams.id
        this.story.$save().then(function(){

          $state.transitionTo('epicShow', {id: $stateParams.id}, {reload: true});
        })
      }
    }


})()
