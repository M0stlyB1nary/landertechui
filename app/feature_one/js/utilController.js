(function () {
    'use strict'

    angular
        .module('daApp', ['ngMaterial'])
        .controller('UtilController', UtilController);
        UtilController.$inject = ['$scope', '$http'];

        function UtilController($scope, $http) {
            var UtilCtlrVM = this;

            UtilCtlrVM.getHello = getHello;

            activate();

            function activate() {
                getHello($scope, $http);
            }

            function getHello($scope, $http) {
                $http.get("http://192.168.0.249:8080/RL/")
                .then(function(response) {
                    $scope.myWelcome = response.data;
                    $scope.myMessage = response.data.content;
                })
                .catch(function(err) {
                    console.log(err)
                })
            }

            function getNewHello($scope) {
                $scope.myMessage = "New";
            }
        }
})();

//daApp.controller('UtilController',
//    function UtilController($scope, $http) {
//        $http.get("http://192.168.0.249:8080/RL/")
//        .then(function(response) {
//        $scope.myWelcome = response.data;
//        $scope.myMessage = response.data.content;
//        })
//        .catch(function(err) {
//        console.log(err)
//        })
//    }
//);

