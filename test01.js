(function (angular) {
    'use strict';
    angular
        .module("TestApp")
        .controller("Test01Ctrl", function ($scope, Observer) {
            Observer.on("hello", getData)
            // Observer.off('hello', getData)

            function getData(event) {
                $scope.name = event.data.name
                $scope.age = event.data.age
                $scope.gender = event.data.gender
            }
        })
})(angular)