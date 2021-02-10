//Base class to store basic data retrieval
(function () {
  var app = angular.module("myApp");
  app.factory("DataService", function ($http) {
    //Main function for the service
    function DataService() {
      //#region GetItemById
      /**
       * Function to retrive the a defect item or user item by id
       * @param {*} Id - userid or defectid
       * @param {*} serviceName - name of the service to run
       * @param {*} callbackFunc - callback function when the service call returns
       */
      this.getItemById = function (Id, serviceName, callbackFunc) {
        $http({
          method: "GET",
          url: "http://localhost:3000/" + serviceName + "/" + Id,
        }).then(function (data) {
          callbackFunc(data);
        });
      };
      //#endregion

      //#region
      /**
       *
       * @param {*} Id - Id to delete a user or defect
       * @param {*} serviceName - name of the service to run
       * @param {*} callbackFunc - call back function to run once the service returns
       */
      this.deleteItemById = function (Id, serviceName, callbackFunc) {
        $http({
          method: "DELETE",
          url: "http://localhost:3000/" + serviceName + "/" + Id,
          headers: {
            "Content-type": "application/json",
          },
        }).then(function (data) {
          callbackFunc(data);
        });
      };
      //#endregion
    }

    return new DataService();
  });
})();
