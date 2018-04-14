let app = angular.module("app",[]);


app.controller('MainCtrl',function ($scope,$http) {

    $http.get("php/sql.php?var1=Monday").then(function (response) {
      $scope.data = response.data.records;
      console.log($scope.data);
    });
    $http.get("php/query2-1.php").then(function (response) {
            $scope.query2Data = response.data.records;
            console.log($scope.query2Data);
    })

});
