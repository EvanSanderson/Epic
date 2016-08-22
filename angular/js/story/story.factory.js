"use strict";

(function() {
   angular
      .module("story")
      .factory("StoryFactory", [
         "$resource",
         StoryFactoryFunction
      ]);

      function StoryFactoryFunction($resource) {
         return $resource("http://localhost:3000/stories/:id", {}, {
         update: { method: "PUT" }
      });
   }
}());
