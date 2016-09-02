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
      // this variable doens't look to be used
      $scope.isHome = false;
      $scope.epic = HomeFactory.get({id: $stateParams.id})
      console.log($scope.epic)
      $scope.stories = []

      // listing the stories associated with the epic you are on
      // i would results is sort of ok, but i like stories / story better here just a bit more semantic
      // also this seems pretty expensive. Looks like you query for all stories, loop through them and select the ones that fit the epic
      // instead why not have an API endpoint that just grabs stories based on epic_id?
      // Lets look at time complexity of 1 versus the other. Its an entire magnitude higher as you have to loop through results
      // Instead have your backend do that, thats what DB queries are for
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
        // read below comment
        this.toggleEdit(epic)
  			$scope.epic = epic;
  			console.log($scope.epic)
  			$scope.epic.$update({id: epic.id}).then(function(){
          $state.transitionTo('epicShow', {id: $stateParams.id}, {reload: true});
  		})
    }
  		$scope.delete = function(epic) {
        // same comments as below
        this.toggleEdit(epic)
  			$scope.epic = epic;
  			$scope.epic.$delete({id: epic.id}).then(function(){
          $state.transitionTo('epicIndex', {reload: true});
  		})
}
      // this sort of thing you should just do in the view
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
        this.story.$update({id: story.id}).then(function(){
          $state.transitionTo('epicShow', {id: $stateParams.id}, {reload: true});
      })
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
      // again all this stuff can go in the view, no need to cloud up your controllers, it might look something like this

      //<div data-ng-click="vm.showStory = !vm.showStory" data-ng-show="vm.showStory">{{vm.story}}</div>
      this.toggleStory = function(story){
        story.showStory = !story.showStory;
      }
}

})()
