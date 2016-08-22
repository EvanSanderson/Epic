"use strict";

(function() {
	angular
	.module("home")
	.controller("HomeIndexController", [
		"HomeFactory",
		'$scope',
		"$state",
		HomeIndexControllerFunction
	])

	function HomeIndexControllerFunction(HomeFactory, $scope, $state) {
		$scope.epics = HomeFactory.query();
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

		this.update = function(epic) {
			this.toggleEdit(epic);
			this.epic = epic;
			console.log(this.epic)
			this.epic.$update({id: epic.id})
		}

		this.delete = function(epic) {
			this.toggleEdit(epic);
			this.epic = epic;
			this.epic.$delete({id: epic.id}).then(function(){
				$state.transitionTo('epicIndex', null, {reload: true});
			})
		}

		this.toggleEdit = function(epic){
			epic.showEdit = !epic.showEdit;
		}
	}
}())
