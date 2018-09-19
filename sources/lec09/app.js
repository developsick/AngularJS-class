(function () {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController);

    function DIController ($scope,
                           $filter,
                           $injector) {
        $scope.name = "Jin";

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(DIController));
    }

    function annotateMe(name, job, blah) {
        return "blah!"
    }

    console.log(DIController.toString());

})();


