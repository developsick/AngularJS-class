(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Jin";
  $scope.stateOfBeing = "fire";
  $scope.cost = .45;



  $scope.sayMessege = function () {
    var msg = "is saying messeges";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.flip = function () {
      $scope.stateOfBeing = "water";
  };
}

})();