"use strict";

(function() {
   angular
      .module("home")
      .factory("HomeFactory", [
         "$resource",
         HomeFactoryFunction
      ]);

      function HomeFactoryFunction($resource) {
         return $resource("http://localhost:3000/epics/:id", {}, {
         update: { method: "PUT" }
      });
   }
}());
