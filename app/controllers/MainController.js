var app = angular.module("init.MainController", []);

app.controller('MainController', ['$scope', function($scope) {
	$scope.message = 'Welcome!';
}]);