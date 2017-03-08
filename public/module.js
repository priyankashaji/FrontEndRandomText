var app = angular.module('myMod',['ngRoute']);

app.config(function($routeProvider,$locationProvider){

  $routeProvider
    .when('/lyric',{
      controller:'myController',
      templateUrl:"lyric.html"
    });
    $locationProvider.hashPrefix('');


});
