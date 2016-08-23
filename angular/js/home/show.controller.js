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
      console.log($scope.epic)
      $scope.stories = []

      // listing the stories associated with the epic you are on
      StoryFactory.query().$promise.then(function(results) {
          angular.forEach(results, function(result) {
            console.log(result.epic_id)
            console.log($stateParams.id)
            if(result.epic_id == $stateParams.id)
              $scope.stories.push(result)
          })
      })

      // update and delete
  		$scope.update = function(epic) {
        this.toggleEdit(epic)
  			$scope.epic = epic;
  			console.log($scope.epic)
  			$scope.epic.$update({id: epic.id})
  		}
  		$scope.delete = function(epic) {
        this.toggleEdit(epic)
  			$scope.epic = epic;
  			$scope.epic.$delete({id: epic.id})
  		}

      this.toggleEdit = function(epic){
        epic.showEdit = !epic.showEdit;
      }

      // creating stories that associate with the epic you are on
      this.story = new StoryFactory();
      this.create = function(){
        this.story.epic_id = $stateParams.id
        this.story.$save().then(function(){
          $state.transitionTo('epicShow', {id: $stateParams.id}, {reload: true});
        })
      }

      //update the stories associated with an epic
      this.update = function(story) {
        this.toggleEdit(story)
        this.story = story
        this.story.$update({id: story.id})
      }

      // deletes stories within epics
      this.delete = function(story) {
        this.toggleEdit(story)
        this.story = story
        this.story.$delete({id: story.id}).then(function(){
          $state.transitionTo('epicShow', {id: $stateParams.id}, {reload: true});
        })
      }
      // toggling hide and show for delete and update
      this.toggleEdit = function(story){
        story.showEdit = !story.showEdit;
      }
    }


})()
