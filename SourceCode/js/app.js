let app = angular.module("app",[]);


app.controller('MainCtrl',function ($scope,$http) {

    //query 1-1 starts here
//query 1 get dropdown values
    $('#query1_dropdown1_options li').on('click', function () {
        $scope.q1_dd_op1 = $(this).text();
        $('.query1_dropdown1').html($(this).find('a').html());
    });

    $('#query1_dropdown2_options li').on('click', function () {
        $scope.q1_dd_op2 = $(this).text();
        $('.query1_dropdown2').html($(this).find('a').html());
    });

    $('#query1_dropdown3_options li').on('click', function () {
        $scope.q1_dd_op3 = $(this).text();
        $('.query1_dropdown3').html($(this).find('a').html());
    });

    $scope.query1_1 = function () {

        if($scope.q1_dd_op1 === "Night") {
            var1 = "((slept>='21:00:00' AND Slept<='23:59:00') or (Slept>='00:00:00' and Slept<='03:00:00'))";
        }
        else if($scope.q1_dd_op1 === "Day") {
            var1 = "((slept>='4:00:00' AND Slept<='20:59:00'))";
        }
        else{
            alert("Select Day/Night");
        }

        if($scope.q1_dd_op2 === "Best" && $scope.q1_dd_op3 === "Best"){
            rating= ">=3.5";
        }
        else if ($scope.q1_dd_op2 === "Worst" && $scope.q1_dd_op3 === "Worst"){
            rating= "<=3.5";
        }
        else{
            alert("Invalid selection");
        }
       $http.get("php/query1-1.php?var1="+var1+"&var2="+rating).then(function (response) {
            $scope.query1_1Data = response.data.records;
            $scope.query1_1DataFri = response.data.records[0].Day;
            $scope.query1_1DataAvgFri=response.data.records[0].Count;
            $scope.query1_1DataMon = response.data.records[1].Day;
            $scope.query1_1DataAvgMon=response.data.records[1].Count;
            $scope.query1_1DataSat = response.data.records[2].Day;
            $scope.query1_1DataAvgSat=response.data.records[2].Count;
            $scope.query1_1DataSun = response.data.records[3].Day;
            $scope.query1_1DataAvgSun=response.data.records[3].Count;
            $scope.query1_1DataThu = response.data.records[4].Day;
            $scope.query1_1DataAvgThu=response.data.records[4].Count;
            $scope.query1_1DataTue = response.data.records[5].Day;
            $scope.query1_1DataAvgTue=response.data.records[5].Count;
            $scope.query1_1DataWed = response.data.records[6].Day;
            $scope.query1_1DataAvgWed=response.data.records[6].Count;
            drawChart1_1();
        });


        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart1_1);
        function drawChart1_1() {
            let data = google.visualization.arrayToDataTable([
                ['Day', 'Avg_Duration'],
                [$scope.query1_1DataMon,  parseFloat($scope.query1_1DataAvgMon)],
                [$scope.query1_1DataTue,  parseFloat($scope.query1_1DataAvgTue)],
                [$scope.query1_1DataWed,  parseFloat($scope.query1_1DataAvgWed)],
                [$scope.query1_1DataThu,  parseFloat($scope.query1_1DataAvgThu)],
                [$scope.query1_1DataFri,  parseFloat($scope.query1_1DataAvgFri)],
                [$scope.query1_1DataSat,  parseFloat($scope.query1_1DataAvgSat)],
                [$scope.query1_1DataSun,  parseFloat($scope.query1_1DataAvgSun)]
            ]);

            let options = {
                title: '',
                hAxis: {title: 'Day Analysis',  titleTextStyle: {color: '#333'}},
                vAxis: {minValue: 0},
                height :500,
                width : 875,

                pieSliceText: 'label',
                pieStartAngle: 100,
                pieHole: 0.2,
                slices: {  1: {offset: 0.2},
                    3: {offset: 0.3},
                    5: {offset: 0.4},
                    7: {offset: 0.5}}
            };
            let chart = new google.visualization.PieChart(document.getElementById('chart1_1div'));
            chart.draw(data, options);
        }
    };


    //query 1-1 ends here

    //query 1-2 starts here
 /*   $http.get("php/query1-2.php").then(function (response) {
        $scope.query1_2Data = response.data.records;
        $scope.query1_2DataFri = response.data.records[0].Day;
        $scope.query1_2DataAvgFri=response.data.records[0].Count;
        $scope.query1_2DataMon = response.data.records[1].Day;
        $scope.query1_2DataAvgMon=response.data.records[1].Count;
        $scope.query1_2DataSat = response.data.records[2].Day;
        $scope.query1_2DataAvgSat=response.data.records[2].Count;
        $scope.query1_2DataSun = response.data.records[3].Day;
        $scope.query1_2DataAvgSun=response.data.records[3].Count;
        $scope.query1_2DataThu = response.data.records[4].Day;
        $scope.query1_2DataAvgThu=response.data.records[4].Count;
        $scope.query1_2DataTue = response.data.records[5].Day;
        $scope.query1_2DataAvgTue=response.data.records[5].Count;
        $scope.query1_2DataWed = response.data.records[6].Day;
        $scope.query1_2DataAvgWed=response.data.records[6].Count;
    });
    //query 1-2 ends here
    */

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
            [$scope.query2_1DataSat,  parseFloat($scope.query2_1DataAvgSat)],
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


    //query 3 starts here
//query 3 get dropdown values
    $('#query3_dropdown1_options li').on('click', function () {
        $scope.q3_dd_op1 = $(this).text();
        $('.query3_dropdown1').html($(this).find('a').html());
    });

    $('#query3_dropdown2_options li').on('click', function () {
        $scope.q3_dd_op2 = $(this).text();
        $('.query3_dropdown2').html($(this).find('a').html());
    });

    $scope.query3_1 = function () {

        if ($scope.q3_dd_op1 === "Bed time") {
            slept_gotup_where = "(slept>='21:00:00' AND Slept<='23:59:00')";
            slept_gotup_col = "slept";
        }
        else if ($scope.q3_dd_op1 === "Wake up time") {
            slept_gotup_where = "(got_up>='00:00:00' AND got_up<='07:00:00')";
            slept_gotup_col = "got_up";
        }
        else {
            alert("Select Avg option");
        }

        if ($scope.q3_dd_op2 === "Month") {
            group_by = "Month";
        }
        else if ($scope.q3_dd_op2 === "Day") {
            group_by = "Day";
        }
        else {
            alert("Select Day or Month");
        }

        if($scope.q3_dd_op1 != "" && $scope.q3_dd_op2 != ""){
            $http.get("php/query3.php?var1="+slept_gotup_col+"&var2="+slept_gotup_where+"&var3="+group_by).then(function (response) {
                $scope.query3Data = response.data.records;
                
                console.log($scope.query3Data);
            })
        }


    }
});
