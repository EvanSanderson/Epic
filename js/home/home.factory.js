"use strict";

(function() {
   angular
      .module("home")
      .factory("HomeFactory", [
         "$resource",
         HomeFactoryFunction
      ]);

      function HomeFactoryFunction($resource) {
         return $resource("https://salty-inlet-35098.herokuapp.com/epics/:id", {}, {
         update: { method: "PUT" }
      });
   }
}());
