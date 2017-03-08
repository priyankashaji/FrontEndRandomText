var app = angular.module("myMod");
app.controller("myController",function($scope,$http){
  $scope.lyric="practice";
  //create a page to store this information
  $scope.lyrics = [];
  $http({
    method: "GET",
    url:"/lyric"
  }).then(function sucessfullCallback(response){
    $scope.lyric = response.data;
  });
});
