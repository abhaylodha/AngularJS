(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "abhay";
    $scope.sayHello = function () {
      return "Hello " + $scope.name
    }
  });
})();
