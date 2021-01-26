"use strict";

describe("myApp.defects module", function () {
  beforeEach(module("myApp.defects"));

  describe("defects controller", function () {
    it("should ....", inject(function ($controller) {
      //spec body
      var defectsCtrl = $controller("defectsCtrl");
      expect(defectsCtrl).toBeDefined();
    }));
  });
});
