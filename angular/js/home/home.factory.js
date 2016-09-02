"use strict";

(function() {
   angular
      .module("home")
      .factory("HomeFactory", [
         "$resource",
         HomeFactoryFunction
      ]);
      // seems like a weird name for this factory. Factories are like cookie cutters, so it's kinda like your doing cookies of home?
      function HomeFactoryFunction($resource) {
        // why is this potentially not so great? well go take a look at your hosted app
         return $resource("https://salty-inlet-35098.herokuapp.com/epics/:id", {}, {
         update: { method: "PUT" }
      });
   }
}());
