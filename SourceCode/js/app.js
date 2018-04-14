let app = angular.module("app",[]);


app.controller('MainCtrl',function ($scope,$http) {

    $http.get("php/sql.php?var1=Monday").then(function (response) {
      $scope.data = response.data.records;
    });

    //query 1-1 starts here
    $http.get("php/query1-1.php").then(function (response) {
        $scope.query1_1Data = response.data.records;
    });
    //query 1-1 ends here

    //query 1-2 starts here
    $http.get("php/query1-2.php").then(function (response) {
        $scope.query1_2Data = response.data.records;
    });
    //query 1-2 ends here

    //query 2-1 starts here
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
            drawChart2_1();
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart2_1);

    function drawChart2_1() {
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
            width : 875,
            pointShape: 'circle',
            pointSize: 10,
        };

        let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
    //query2-1 ends here

    //query2-2 starts here
    $http.get("php/query2-2.php").then(function (response) {

        $scope.query2_1Data = response.data.records;
        $scope.query2_1DataFri = response.data.records[0].Day;
        $scope.query2_1DataAvgFri=response.data.records[0].Avg_hft;
        $scope.query2_1DataMon = response.data.records[1].Day;
        $scope.query2_1DataAvgMon=response.data.records[1].Avg_hft;
        $scope.query2_1DataSat = response.data.records[2].Day;
        $scope.query2_1DataAvgSat=response.data.records[2].Avg_hft;
        $scope.query2_1DataSun = response.data.records[3].Day;
        $scope.query2_1DataAvgSun=response.data.records[3].Avg_hft;
        $scope.query2_1DataThu = response.data.records[4].Day;
        $scope.query2_1DataAvgThu=response.data.records[4].Avg_hft;
        $scope.query2_1DataTue = response.data.records[5].Day;
        $scope.query2_1DataAvgTue=response.data.records[5].Avg_hft;
        $scope.query2_1DataWed = response.data.records[6].Day;
        $scope.query2_1DataAvgWed=response.data.records[6].Avg_hft;
        drawChart2_2();
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart2_2);
    function drawChart2_2() {
        let data = google.visualization.arrayToDataTable([
            ['Day', 'Avg_Duration'],
            [$scope.query2_1DataMon,  parseFloat($scope.query2_1DataAvgMon)],
            [$scope.query2_1DataTue,  parseFloat($scope.query2_1DataAvgTue)],
            [$scope.query2_1DataWed,  parseFloat($scope.query2_1DataAvgWed)],
            [$scope.query2_1DataThu,  parseFloat($scope.query2_1DataAvgThu)],
            [$scope.query2_1DataFri,  parseFloat($scope.query2_1DataAvgFri)],
            [$scope.query2DataSat,  parseFloat($scope.query2_1DataAvgSat)],
            [$scope.query2_1DataSun,  parseFloat($scope.query2_1DataAvgSun)]
        ]);

        let options = {
            title: '',
            hAxis: {title: 'Day Analysis',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            height :500,
            width : 875,
            pointShape: 'circle',
            pointSize: 10
        };
        let chart = new google.visualization.LineChart(document.getElementById('chart2_div'));
        chart.draw(data, options);
    }

    // query 2-2 ends here

});
