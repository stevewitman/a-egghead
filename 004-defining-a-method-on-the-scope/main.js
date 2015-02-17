var myApp = angular.module('myApp', [])
.controller("FirstCtrl", function FirstCtrl($scope, Data) {
  $scope.data = Data;
})
.controller("SecondCtrl", function SecondCtrl($scope, Data) {
  $scope.data = Data;
  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  }
})
myApp.factory('Data', function() {
  return {message:"I'm data from a service"}
})
