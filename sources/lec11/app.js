(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Jin";
  $scope.stateOfBeing = "fire";
  $scope.sayMessege = function () {
    return "is saying messeges";
  };

  $scope.flip = function () {
      $scope.stateOfBeing = "water";
  };
}

})();