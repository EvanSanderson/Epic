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
      $scope.epics = HomeFactory.query();

      // create function
      this.epic = new HomeFactory();
      this.create = function($scope){
        this.toggleNew()
          this.epic.lat = latitude[0]
          this.epic.long = longitude[0]
          var item = this.epic


          this.epic.$save().then(function(){
            var newEpic = document.createElement('a');
            newEpic.setAttribute('href', '/Epic/#/epic/' + item.id);
            angular.element(newEpic).append(item.title);
            angular.element(document.getElementById("epic-list")).append(newEpic);
            $state.transitionTo('epicIndex', null, {reload: true});
          });
        $scope.map.center = { latitude: latitude[0], longitude: longitude[0], zoom: 5 };
      }

      // toggles hide function on buttons
      this.toggleNew = function(){
        this.showNew = !this.showNew;
      }

      // Google Maps Data \\
      // How the map appears on rendering \\
      $scope.map = { 
        center: {
          latitude: 30,
          longitude: -30
        },
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
      $scope.marker = HomeFactory.query().$promise.then(function(val){
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
        })
      })

      // Marker events \\
      $scope.markerClick = function(marker){
        console.log(marker);
        var contentString = "<a class='window_link window_wrapper' href='/Epic/#/epic/" + marker.model.id + "'><h3 class='window_header'>" + marker.model.title + "</h3>" + "<img class='window_img' src='" + marker.model.img + "'>" + "<p>" + marker.model.sum + "</p></a>";
        console.log(contentString)
          var infowindow = new google.maps.InfoWindow({
            content: contentString,
            scrollwheel: false

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
      var latitude = [];
      var longitude = [];
      $scope.searchbox = {
        template:'searchbox.tpl.html',
        events: {
          places_changed: function (searchBox) {
              //           console.log(searchBox)
              //           console.log(searchBox.gm_accessors_.places.Qc.formattedPrediction)
              //           console.log(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].url)
            latitude.push(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].geometry.viewport.f.b);
            longitude.push(searchBox.gm_accessors_.places.Qc.searchBoxPlaces[0].geometry.viewport.b.f)
            // $scope.map.center = { latitude: latitude[0], longitude: longitude[0], zoom: 5 };

          }
        }
      }



    }

}())
