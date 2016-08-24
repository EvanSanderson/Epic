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
      // Epic data \\
      $scope.epics = HomeFactory.query();
      this.update = function(epic) {
        this.toggleEdit(epic);
        this.epic = epic;
          this.epic.$update({id: epic.id})
      }

      // delete function
      this.delete = function(epic) {
        this.toggleEdit(epic);
        this.epic = epic;
        this.epic.$delete({id: epic.id}).then(function(){
          $state.transitionTo('epicIndex', null, {reload: true});
        })
      }

      // create function
      this.epic = new HomeFactory();
      this.create = function($scope){
        this.toggleNew()
        this.epic.lat = latitude[0]
        this.epic.long = longitude[0]
        this.epic.$save().then(function(){
          $state.transitionTo('epicIndex', null, {reload: true});
        })
      }

      // toggles hide function on buttons
      this.toggleNew = function(){
        console.log("working")
        this.showNew = !this.showNew;
      }

      // Google Maps Data \\
      // How the map appears on rendering \\
      $scope.map = { center: {
        latitude: 30,
        longitude: -30},
        zoom: 3,
        show: false,
        model: {}
      }
      // Map Styles \\
      console.log(stylesArray);
      $scope.options = {
        styles: stylesArray,
        options: {
          draggable: true,
          minZoom: 3,
        },
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
          var contentString = '<a class="window_link window_wrapper" href=#/epics/'+marker.model.id+'><h3 class="window_header">'+marker.model.title+'</h3>' + '<img class="window_img" src='+marker.model.img+'>' + '<p>'+marker.model.sum+'</p></a>'
            var infowindow = new google.maps.InfoWindow({
              content: contentString,
              scrollwheel: false

            })
          infowindow.open(map, marker);
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
        // Event for marker clicks \\
        // $scope.markerClick = {
        //   function(model, eventName, marker, args, $stateParams){
        //     console.log("state", $stateParams);
        //     model.show = true;
        //     $scope.$apply();
        //   }
        // }

        // $scope.closeClick = function() {
        //   $scope.windowOptions.visible = false;
        // };

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

                // $scope.markerList.push()
            }
          }
        }



        // update and delete
        $scope.update = function(epic) {
          $scope.epic = epic;
          console.log($scope.epic)
            $scope.epic.$update({id: epic.id})
        }
        $scope.delete = function(epic) {
          $scope.epic = epic;
          $scope.epic.$delete({id: epic.id})
        }

    }

}())
