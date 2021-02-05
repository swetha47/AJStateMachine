var myApp = angular.module("myApp");

myApp.controller("mainCtrl", function ($scope, StateService) {
  //#region Declarations
  let bugId = 0;
  let defectTracker = new DefectTracker();
  //#endregion

  //#region Add, Delete and Resolve
  /**
   * The function is called when the user clicks the Add new defect button.
   */
  $scope.addNewBug = function () {
    try {
      bugId = bugId + 1;

      defectTracker.addNewBug(
        bugId,
        "Bug " + bugId,
        "Project " + bugId,
        "Descrption " + bugId,
        false
      );
      $scope.defects = defectTracker.state.defects.items;
    } catch (err) {
      $scope.error = err;
    }
  };

  /**
   * The function is called when the user clicks the delete button next to defect.
   * The function receives a defectId from the view.
   * @param {number} defectId
   */
  $scope.delete = function (defectId) {
    try {
      defectTracker.deleteBug(defectId);
      $scope.defects = defectTracker.state.defects.items;
    } catch (err) {
      $scope.error = err;
    }
  };
  /**
   * The function is called when the user checks/unchecks the Resolved checkbox.
   * The function gets passed the defectId on which the checkbox is clicked.
   * @param {number} defectId
   */
  $scope.resolved = function (defectId) {
    try {
      defectTracker.resolveBug(defectId);
      $scope.defects = defectTracker.state.defects.items;
    } catch (err) {
      $scope.error = err;
    }
  };
  //#endregion
});
