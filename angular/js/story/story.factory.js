"use strict";

(function() {
   angular
      .module("story")
      .factory("StoryFactory", [
         "$resource",
         StoryFactoryFunction
      ]);

      function StoryFactoryFunction($resource) {
         return $resource("https://salty-inlet-35098.herokuapp.com/stories/:id", {}, {
         update: { method: "PUT" }
      });
   }
}());
