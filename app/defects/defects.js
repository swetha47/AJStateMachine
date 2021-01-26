"use strict";

angular
  .module("myApp.defects", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/defects", {
        templateUrl: "defects/defects.html",
        controller: "defectsCtrl",
      });
    },
  ])

  .controller("defectsCtrl", [
    function () {
      console.log("in defects");
    },
  ]);
