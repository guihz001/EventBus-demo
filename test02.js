(function (angular) {
    'use strict';
    angular
        .module("TestApp")
        .controller("Test02Ctrl", function ($scope, Observer) {
            $scope.name = '';
            $scope.$watch("name", function (newvalue) {
                Observer.fire({
                    type: 'hello',
                    data: {
                        name: newvalue,
                        age: '18',
                        gender: 'male'
                    }
                })
            })
           

        })
})(angular)