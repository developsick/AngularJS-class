//Minification examples
//minify codes at https://javascript-minifier.com/
//basic code
(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController',DIController);

function DIController ($scope, $filter) {
  $scope.name = "Jin";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();


//1. inline array with parameters of the DIcontroller as string literals
//(function () {
//'use strict';
//
//angular.module('DIApp', [])
//.controller('DIController', ['$scope', '$filter', function ('$scope', '$filter') {
//      $scope.name = "Jin";
//
//      $scope.upper = function () {
//      var upCase = $filter('uppercase');
//      $scope.name = upCase($scope.name);
//  };

}]);
//
//function DIController ($scope, $filter) {
//  $scope.name = "Jin";
//
//  $scope.upper = function () {
//    var upCase = $filter('uppercase');
//    $scope.name = upCase($scope.name);
//  };
//}
//
//})();


//2. inline array with function as last element
//(function () {
//'use strict';
//
//angular.module('DIApp', [])
//.controller('DIController', ['$scope', '$filter', DIController]);
//
//function DIController ($scope, $filter) {
//  $scope.name = "Jin";
//
//  $scope.upper = function () {
//    var upCase = $filter('uppercase');
//    $scope.name = upCase($scope.name);
//  };
//}
//
//})();


//3. attach $inject property yo the function
//(function () {
//'use strict';
//
//angular.module('DIApp', [])
//.controller('DIController', DIController);
//
//DIController.$inject = ['$scope', '$filter'];
//
//function DIController ($scope, $filter) {
//  $scope.name = "Jin";
//
//  $scope.upper = function () {
//    var upCase = $filter('uppercase');
//    $scope.name = upCase($scope.name);
//  };
//}
//
//})();
