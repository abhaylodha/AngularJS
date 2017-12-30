(function () {
  'use strict';

  angular.module('DietReview', [])

  .controller('DietReviewController', DietReviewController);

  DietReviewController.$inject = ['$scope'];
  function DietReviewController ($scope) {
     $scope.itemsToEat = "";

     $scope.checkDiet = function(){
     var response = checkDiet($scope.itemsToEat);
     $scope.color = response[0];
     $scope.message = response[1];
     //return $scope.totalValue;
   }

 }

  var checkDiet = function(string) {
    var arrayOfStrings  = splitString(string, ",");

    if (string == "" ) {
      return (["red","Please enter data first."]);
    }
    if (arrayOfStrings.length > 3 )
      return (["red", "Too Much !! "]);
    else if (arrayOfStrings.length = 0 ) {
      return (["red","Please enter data first."]);
    }
    else {
      return (["green","Enjoy."]);
    }
  }

  function splitString(stringToSplit, separator) {
      return (stringToSplit.split(separator));
  }

})();
