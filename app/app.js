"use strict";

// Declare app level module which depends on views, and core components
angular
  .module("myApp", ["ngRoute", "myApp.defects", "myApp.view2", "myApp.version"])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $routeProvider
        .when("/main", {
          templateUrl: "/main",
          controller: "mainCtrl",
        })
        .when("/create", {
          templateUrl: "/create",
          controller: "createCtrl",
        })
        .otherwise({ redirectTo: "/main" });
    },
  ]);
