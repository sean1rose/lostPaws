'use strict';

describe('Controller: MainListCtrl', function () {

  // load the controller's module
  beforeEach(module('lostPawsApp'));

  var MainListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainListCtrl = $controller('MainListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
