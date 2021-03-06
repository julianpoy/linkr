'use strict';

describe('Controller: LinksCtrl', function () {

  // load the controller's module
  beforeEach(module('linkJayApp'));

  var LinksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinksCtrl = $controller('LinksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LinksCtrl.awesomeThings.length).toBe(3);
  });
});
