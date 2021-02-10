var myApp = angular.module("myApp");
/**
 * Main Controller
 *
 * @param {scope} $scope Injected controller level scope.
 */
myApp.controller("mainCtrl", [
  "$scope",
  "DefectItemService",
  "$http",
  function ($scope, DefectItemService, $http) {
    //#region Declarations
    let bugId = 0;
    //let defectTracker = new DefectTracker();
    DefectItemService.getAllDefects(function (response) {
      $scope.defects = response.data;
    });
    //#endregion

    //#region Add, Delete and Resolve
    /**
     * The function is called when the user clicks the Add new defect button.
     */
    $scope.addNewBug = function () {
      try {
        bugId = bugId + 1;

        DefectItemService.createNewDefect(
          {
            name: "Bug " + bugId,
            project: "Project " + bugId,
            description: "Description " + bugId,
            resolved: false,
          },
          function (response) {
            DefectItemService.getAllDefects(function (response) {
              $scope.defects = response.data;
            });
          }
        );
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
        DefectItemService.deleteItemById(
          defectId,
          "defects",
          function (response) {
            DefectItemService.getAllDefects(function (response) {
              $scope.defects = response.data;
            });
          }
        );
        //defectTracker.deleteBug(defectId);
        //$scope.defects = defectTracker.state.defects.items;
      } catch (err) {
        $scope.error = err;
      }
    };
    /**
     * The function is called when the user checks/unchecks the Resolved checkbox.
     * The function gets passed the defectId on which the checkbox is clicked.
     * @param {number} defectId
     * @param {boolean} checked - status of checkbox
     */
    $scope.resolved = function (defectId, checked) {
      try {
        let item = "";
        DefectItemService.getItemById(defectId, "defects", function (response) {
          item = response.data;
          item.resolved = checked;
          DefectItemService.deleteItemById(defectId, "defects", function () {
            DefectItemService.createNewDefect(item, function (response) {
              DefectItemService.getAllDefects(function (response) {
                $scope.defects = response.data;
              });
            });
          });
        });
      } catch (err) {
        $scope.error = err;
      }
    };
    //#endregion
  },
]);
