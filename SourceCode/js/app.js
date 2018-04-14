let app = angular.module("app",[]);
app.controller('MainCtrl',function ($scope,$http) {

    $http.get("php/sql.php").then(function (response) {
      $scope.data = response.data.records;
      console.log("hi");
      console.log($scope.data);
    });
});

