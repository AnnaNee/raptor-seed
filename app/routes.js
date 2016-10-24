var app = angular.module('init.routes', []);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: "MainController"
    });
}]);