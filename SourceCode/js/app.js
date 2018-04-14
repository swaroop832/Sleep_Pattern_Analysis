let app = angular.module("app",[]);


app.controller('MainCtrl',function ($scope,$http) {

    $http.get("php/sql.php?var1=Monday").then(function (response) {
      $scope.data = response.data.records;
    });
    $http.get("php/query2-1.php").then(function (response) {
            $scope.query2Data = response.data.records;
            $scope.query2DataFri = response.data.records[0].Day;
            $scope.query2DataAvgFri=response.data.records[0].Avg_Duration;
            $scope.query2DataMon = response.data.records[1].Day;
            $scope.query2DataAvgMon=response.data.records[1].Avg_Duration;
            $scope.query2DataSat = response.data.records[2].Day;
            $scope.query2DataAvgSat=response.data.records[2].Avg_Duration;
            $scope.query2DataSun = response.data.records[3].Day;
            $scope.query2DataAvgSun=response.data.records[3].Avg_Duration;
            $scope.query2DataThu = response.data.records[4].Day;
            $scope.query2DataAvgThu=response.data.records[4].Avg_Duration;
            $scope.query2DataTue = response.data.records[5].Day;
            $scope.query2DataAvgTue=response.data.records[5].Avg_Duration;
            $scope.query2DataWed = response.data.records[6].Day;
            $scope.query2DataAvgWed=response.data.records[6].Avg_Duration;
            drawChart();
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Day', 'Avg_Duration'],
            [$scope.query2DataMon,  parseFloat($scope.query2DataAvgMon)],
            [$scope.query2DataTue,  parseFloat($scope.query2DataAvgTue)],
            [$scope.query2DataWed,  parseFloat($scope.query2DataAvgWed)],
            [$scope.query2DataThu,  parseFloat($scope.query2DataAvgThu)],
            [$scope.query2DataFri,  parseFloat($scope.query2DataAvgFri)],
            [$scope.query2DataSat,  parseFloat($scope.query2DataAvgSat)],
            [$scope.query2DataSun,  parseFloat($scope.query2DataAvgSun)]
        ]);

        let options = {
            title: '',
            hAxis: {title: 'Day Analysis',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            height :500,
            width : 875
        };

        let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    $http.get("php/query2-2.php").then(function (response) {

        $scope.query2_1Data = response.data.records;
        console.log($scope.query2_1Data);

    })

});
