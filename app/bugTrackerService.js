(function () {
  var bugTracker = function () {
    let bugId = 0;
    defects = [];

    var getBugs = function () {
      defects.push({
        id: bugId++,
        name: "Defect 1",
        project: "Project 1",
        description: "Description 1",
      });
      defects.push({
        id: bugId++,
        name: "Defect 2",
        project: "Project 2",
        description: "Description 2",
      });
      defects.push({
        id: bugId++,
        name: "Defect 3",
        project: "Project 3",
        description: "Description 3",
      });

      return defects;
    };

    return {
      getBugs: getBugs,
    };
  };
  var module = angular.module("myApp");
  module.factory("bugTracker", bugTracker);
})();
