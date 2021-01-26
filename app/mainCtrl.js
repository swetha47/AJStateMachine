var myApp = angular.module("myApp");

myApp.controller("mainCtrl", function ($scope, bugTracker, StateService) {
  //temp variable
  let bugId = 0;
  $scope.defects = bugTracker.getBugs();

  $scope.delete = function (defectId) {
    StateService.dispatch(StateService.getState(), {
      type: "bugDeleted",
      payload: {
        id: defectId,
      },
    });
  };

  $scope.addNewBug = function () {
    bugId = bugId + 1;

    const store = StateService.dispatch(StateService.getState(), {
      type: "bugAdded",
      payload: {
        id: bugId,
        name: "Bug " + bugId,
        project: "Project " + bugId,
        description: "Descrption " + bugId,
      },
    });

    console.log("State:" + store);
  };

  $scope.resolved = function (defectId) {
    const store = StateService.dispatch(StateService.getState(), {
      type: "bugResolved",
      payload: {
        id: defectId,
      },
    });
  };
});
