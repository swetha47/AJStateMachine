(function () {
  var app = angular.module("myApp");
  /**
   * UserService drives from the DataService
   */
  app.factory("UserService", [
    "DataService",
    "$http",
    function (DataService, $http) {
      /**
       * Main User Service fuction
       */
      var UserService = function () {
        //Assigning the parent class
        DefectItemService.prototype = Object.create(
          DataService.constructor.prototype
        );

        //Calling the parent constructor
        DataService.constructor.call(this);

        //#region CreateNewUser
        /**
         * Create User Service takes a new user and makes a $http call to create a new user
         * @param {object} newUser - It is an object containing the informationto create a newUser on the server
         * @param {*} callbackFunc - The callback function to be executed after the $http call
         */
        this.createNewUser = function (newUser, callbackFunc) {
          $http({
            method: "POST",
            url: "http://localhost:3000/users",
            body: JSON.stringify(newUser),
            headers: {
              "Content-type": "application/x-www-form-urlencoded",
            },
          }).then(function (data) {
            callbackFunc(data);
          });
        };
        //#endregion

        //#region GetAllUsers
        /**
         * The function returns all the existing users on the server
         * @param {*} callbackFunc - The callback function to be executed after the $http call.
         */
        this.getAllUsers = function (callbackFunc) {
          $http({
            method: "GET",
            url: "http://localhost:3000/users",
          }).then(function (data) {
            callbackFunc(data);
          });
        };
        //#endregion
      };

      return new UserService();
    },
  ]);
})();
