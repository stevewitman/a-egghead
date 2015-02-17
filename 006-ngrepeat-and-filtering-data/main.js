var myApp = angular.module('myApp', [])
.controller("AvengersCtrl", function AvengersCtrl($scope, Avengers) {
  $scope.avengers = Avengers;
});

myApp.factory('Avengers', function () {
  var Avengers = {};
  Avengers.cast = [
    {
      name:"Clark Gregg",
      character:"Agent Phil Coulson"
    },
    {
      name:"Tom Hiddleston",
      character:"Loki"
    },
    {
      name:"Cobie Smulders",
      character:"Agent Maria Hill"
    },
    {
      name:"Stellen Slarsgard",
      character:"Selvig"
    },
    {
      name:"Samuel L. Jackson",
      character:"Nick Fury"
    },
    {
      name:"Gwyneth Paltrow",
      character:"Pepper Pots"
    },
    {
      name:"Paul Bettany",
      character:"Jarvis"
    }
  ];
  return Avengers;
})
