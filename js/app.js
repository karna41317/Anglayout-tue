

'use strict';

// angular.js main app initialization
var app = angular.module('layout', [])
        .config(['$routeProvider', function($routeProvider) {
                $routeProvider.
                        when('/', {templateUrl: 'pages/library.html', controller: LibCtrl, activetab: 'library'}).
                        when('/mypages', {templateUrl: 'pages/mypages.html', controller: MypageCtrl, activetab: 'mypages'}).
                        when('/logout', {templateUrl: 'pages/logout.html', controller: LogoutCtrl, activetab: 'logout'}).
                        otherwise({redirectTo: '/'});
            }])
        .run(['$rootScope', '$http', '$browser', '$timeout', "$route", function($scope, $http, $browser, $timeout, $route) {

                $scope.$on("$routeChangeSuccess", function(scope, next, current) {
                    $scope.part = $route.current.activetab;
                });

//        // onclick event handlers
//        $scope.showForm = function () {
//          $('.contactRow').slideToggle();
//        };
//        $scope.closeForm = function () {
//          $('.contactRow').slideUp();
//        };

                // save the 'Contact Us' form
//        $scope.save = function () {
//          $scope.loaded = true;
//          $scope.process = true;
//          $http.post('sendemail.php', $scope.message).success(function () {
//              $scope.success = true;
//              $scope.process = false;
//          });
//        };
            }]);

app.config(['$locationProvider', function($location) {
        $location.hashPrefix('!');
    }]);

