"use strict";

(function(){
  angular
    .module( "story" )
    .controller("StoryNewController", [
      "StoryFactory",
      "$state",
      "$scope",
      StoryNewControllerFunction
    ])

    function StoryNewControllerFunction(StoryFactory, $state, $scope){
      $scope.story = new StoryFactory();
      $scope.create = function(){
        $scope.story.$save()
        $state.transitionTo('storyIndex', null, {reload: true});
      }
    }
})()
