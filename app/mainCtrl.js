var myApp = angular.module("myApp");

myApp.controller("mainCtrl", function ($scope, bugTracker, StateService) {
  let bugId = 0;
  // $scope.defects = bugTracker.getBugs();
  $scope.defects = StateService.getState().defects.items;

  $scope.delete = function (defectId) {
    StateService.dispatch(StateService.getState(), {
      type: "bugRemoved",
      payload: {
        id: defectId,
      },
    });
    let def = StateService.getState();
    $scope.defects = def.defects.items;
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
    $scope.defects = StateService.getState().defects.items;
    //console.log("State:" + store);
  };

  $scope.resolved = function (defectId) {
    const store = StateService.dispatch(StateService.getState(), {
      type: "bugResolved",
      payload: {
        id: defectId,
      },
    });
    $scope.defects = StateService.getState().defects.items;
  };
});
