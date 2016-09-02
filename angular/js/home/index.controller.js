"use strict";

(function() {
  angular
    .module("home")
    .controller("HomeIndexController", [
        "HomeFactory",
        '$scope',
        'uiGmapGoogleMapApi',
        '$state',
        '$stateParams',
        HomeIndexControllerFunction
    ])


    function HomeIndexControllerFunction(HomeFactory, $scope, GoogleMapApi, $state) {

      // Epic data
      // was curious why using $scope here but then using this in other bits of functionality. I would stick with one or the other so you're not confusing yourself at the view level.
      $scope.epics = HomeFactory.query();

      // create function
      this.epic = new HomeFactory();
      this.create = function($scope){
        this.toggleNew()
          this.epic.lat = latitude[0]
          this.epic.long = longitude[0]

        var item = this.epic
          this.epic.$save().then(function(){
            // this seems like you shouldn't need to do this dom manipulation here
            var newEpic = document.createElement('a');
            newEpic.setAttribute('href', '/#/epics/' + item.id);
            angular.element(newEpic).append(item.title);
            angular.element(document.getElementById("epic-list")).append(newEpic);
            $state.transitionTo('epicIndex', null, {reload: true});
          });
      }

      // toggles hide function on buttons
      // why not just do this in the view? instead of making a function for it?
      this.toggleNew = function(){
        this.showNew = !this.showNew;
      }

      // Google Maps Data \\
      // How the map appears on rendering \\
      var latitude = [];
      var longitude = [];
      // why use $scope here?
      $scope.map = { center: {
        latitude: 30,
        longitude: -30},
        zoom: 3,
        show: false,
        model: {}
      }
      // Map Styles \\
      $scope.options = {
        options: {
          draggable: true,
          minZoom: 3,
        },
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.HYBRID]
        },
        mapTypeId: google.maps.MapTypeId.HYBRID
      }

        // Marker Locations \\
        $scope.markers = [];
        // i think val is not a great variable name here, it doesn't assume plurality or the type of model, mebbe better is epics
        $scope.marker = HomeFactory.query().$promise.then(function(val){
          // here its unclear which is the list and whats being iterated over better might be
          // angular.forEach(epics, function(epic, key))
          angular.forEach(val, function(val, key) {
            $scope.markers.push({
              id: val.id,
              title: val.title,
              sum: val.summary,
              img: val.img_url,
              coords: {
                latitude: val.lat,
                longitude: val.long
              }
            })

            $scope.map.center.latitude = val.lat;
            $scope.map.center.longitude = val.long;
            $scope.map.refresh = true;
          })
        })

        // Marker events
        $scope.markerClick = function(marker){
          var contentString = '<br><a class="window_link window_wrapper" href=#/epics/'+marker.model.id+'><h3 class="window_header">'+marker.model.title+'</h3>' + '<img class="window_img" src='+marker.model.img+'>' + '<p>'+marker.model.sum+'</p></a>'
            var infowindow = new google.maps.InfoWindow({
              content: contentString,
              scrollwheel: false,
            })
          infowindow.open(map, marker);
          $scope.map.center = { latitude: marker.model.coords.latitude, longitude: marker.model.coords.longitude, zoom: 5 };
        };


        // Custom Icon \\
        $scope.markersOptions = {
          options: {draggable: false,
            icon:{
              url: 'shadowPin.png',
              scaledSize: {width: 40, height: 40}
            },
            animation: window.google.maps.Animation.DROP
          }
        }
        $scope.searchbox = {
          template:'searchbox.tpl.html',
          events: {
            places_changed: function (searchBox) {
              // should take out console.logs for production code
              //           console.log(searchBox)
              //           console.log(searchBox.gm_accessors_.places.Qc.formattedPrediction)
              //           console.log(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].url)
              latitude.push(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].geometry.viewport.f.b);
              longitude.push(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].geometry.viewport.b.f)
            }
          }
        }


    }

}())
