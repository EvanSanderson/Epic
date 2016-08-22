"use strict";

(function(){
  angular
  .module("home")
  .controller( "HomeNewController", [
    "HomeFactory",
    "$state",
    HomeNewControllerFunction
  ])

  function HomeNewControllerFunction(HomeFactory, $state){
    this.epic = new HomeFactory();
    this.create = function(){
      this.epic.$save()
      $state.transitionTo('epicIndex', null, {reload: true});
    }
  }

}());
