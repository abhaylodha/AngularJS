(function () {
  'use strict';

  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function($scope) {
      $scope.name = "";

      $scope.calculateTotalValue = function(){
      $scope.totalValue = calculateNameValue($scope.name)
      //return $scope.totalValue;
    }

  });

  var calculateNameValue = function(string) {
    var tVal = 0;

    for (var i = 0; i < string.length; i++) {
       tVal = tVal + string.charCodeAt(i);
     }

    return tVal;
  }

})();
