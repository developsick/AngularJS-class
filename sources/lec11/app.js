(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Jin";

  $scope.sayMessege = function () {
    return "is saying messeges";
  };
}

})();