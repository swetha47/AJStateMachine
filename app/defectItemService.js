(function () {
  var app = angular.module("myApp");

  /**
   * DefectItemService inherits from DataService.
   * The DefectItemService takes DataService and $http as inputs
   */
  app.factory("DefectItemService", [
    "DataService",
    "$http",
    function (DataService, $http) {
      //The main function for DefectItemService
      var DefectItemService = function () {
        //Assigning the parent class
        DefectItemService.prototype = Object.create(
          DataService.constructor.prototype
        );
        DataService.constructor.call(this);
        //#region CreateNewDefect
        /**
         * The function creates a new defect on the server.
         * @param {*} newDefect - Takes an object that has all the information to create a new defect
         * @param {*} callbackFunc - Call back function to run after the $http service returns
         */
        this.createNewDefect = function (newDefect, callbackFunc) {
          $http({
            method: "post",
            url: "http://localhost:3000/defects",
            data: JSON.stringify(newDefect),
            headers: {
              "Content-type": "application/json",
            },
          }).then(function (data) {
            callbackFunc(data);
          });
        };
        //#endregion

        //#region UpdateResolvedDefect
        /**
         * The function updates a defect for its resolved vale on the server.
         * @param {*} item - Takes an object that has all the information to create a new defect
         * @param {*} callbackFunc - Call back function to run after the $http service returns
         */
        this.updateResolvedDefect = function (item, callbackFunc) {
          $http({
            method: "put",
            url: "http://localhost:3000/defects/",
            data: JSON.stringify(item),
            headers: {
              "Content-type": "application/json",
            },
          }).then(function (data) {
            callbackFunc(data);
          });
        };
        //#endregion

        //#region GetAllDefects
        /**
         * The function returns all the defects on the server.
         * @param {*} callbackFunc - Call back function to run after the $http service returns
         */
        this.getAllDefects = function (callbackFunc) {
          $http({
            method: "GET",
            url: "http://localhost:3000/defects?_sort=id",
          }).then(function (data) {
            callbackFunc(data);
          });
        };
        //#endregion
      };

      return new DefectItemService();
    },
  ]);
})();
