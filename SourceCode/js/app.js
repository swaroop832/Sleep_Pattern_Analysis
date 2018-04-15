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
                if ($scope.q3_dd_op2 === "Day") {

                $scope.query3_DataFri = response.data.records[0].column_name;
                $scope.query3_DataAvgFri=response.data.records[0].Avg;
                $scope.query3_DataMon = response.data.records[1].column_name;
                $scope.query3_DataAvgMon=response.data.records[1].Avg;
                $scope.query3_DataSat = response.data.records[2].column_name;
                $scope.query3_DataAvgSat=response.data.records[2].Avg;
                $scope.query3_DataSun = response.data.records[3].column_name;
                $scope.query3_DataAvgSun=response.data.records[3].Avg;
                $scope.query3_DataThu = response.data.records[4].column_name;
                $scope.query3_DataAvgThu=response.data.records[4].Avg;
                $scope.query3_DataTue = response.data.records[5].column_name;
                $scope.query3_DataAvgTue=response.data.records[5].Avg;
                $scope.query3_DataWed = response.data.records[6].column_name;
                $scope.query3_DataAvgWed=response.data.records[6].Avg;
                    drawTableq3_day();
                }
                if ($scope.q3_dd_op2 === "Month") {
                    $scope.query3_DataFri = response.data.records[0].column_name;
                    $scope.query3_DataAvgFri=response.data.records[0].Avg;
                    $scope.query3_DataMon = response.data.records[1].column_name;
                    $scope.query3_DataAvgMon=response.data.records[1].Avg;
                    $scope.query3_DataSat = response.data.records[2].column_name;
                    $scope.query3_DataAvgSat=response.data.records[2].Avg;
                    $scope.query3_DataSun = response.data.records[3].column_name;
                    $scope.query3_DataAvgSun=response.data.records[3].Avg;
                    drawTableq3_month();
                }

            })
        }

        google.charts.load('current', {'packages':['table']});
        google.charts.setOnLoadCallback(drawTableq3_day);

        function drawTableq3_day() {
            let data = new google.visualization.DataTable();
            data.addColumn('string', 'Day');
            data.addColumn('string', 'Time');
            data.addRows([
                [$scope.query3_DataMon,{f: $scope.query3_DataAvgMon}],
                [$scope.query3_DataTue,   {f: $scope.query3_DataAvgTue}],
                [$scope.query3_DataWed, {f: $scope.query3_DataAvgWed}],
                [$scope.query3_DataThu,   {f: $scope.query3_DataAvgThu}],
                [$scope.query3_DataFri,   {f: $scope.query3_DataAvgFri}],
                [$scope.query3_DataSat,   {f: $scope.query3_DataAvgSat}],
                [$scope.query3_DataSun,   {f: $scope.query3_DataAvgSun}]
            ]);

            let table = new google.visualization.Table(document.getElementById('chart3_div'));

            table.draw(data, { width: '100%', height: '100%'});
        }

        function drawTableq3_month() {
            let data = new google.visualization.DataTable();
            data.addColumn('string', 'Month');
            data.addColumn('string', 'Time');
            //data.addRows(4);
            data.addRows([
                [$scope.query3_DataSun,   {f: $scope.query3_DataAvgSun}],
                [$scope.query3_DataSat,   {f: $scope.query3_DataAvgSat}],
                [$scope.query3_DataFri,   {f: $scope.query3_DataAvgFri}],
                [$scope.query3_DataMon,   {f: $scope.query3_DataAvgMon}]
            ]);
            //data.setCell(1, 1, {'style': 'background-color: red;'});
            //data.setCell(22, 2, 15, 'Fifteen', {style: 'font-style:bold; font-size:22px;'});
            let table = new google.visualization.Table(document.getElementById('chart3_div'));

            table.draw(data, { width: '100%', height: '100%'});
        }
        };
//query4 starts here
    $http.get("php/query4.php").then(function (response) {
        $scope.query4Data = response.data.records;
        $scope.q4count0 = response.data.records[0].Count;
        $scope.q4count1 = response.data.records[1].Count;
        $scope.q4count2 = response.data.records[2].Count;
        $scope.q4count3 = response.data.records[3].Count;
        $scope.q4count4 = response.data.records[4].Count;
        $scope.q4count5 = response.data.records[5].Count;
        $scope.q4count6 = response.data.records[6].Count;
        $scope.q4count7 = response.data.records[7].Count;
        $scope.q4count8 = response.data.records[8].Count;
        $scope.q4count9 = response.data.records[9].Count;
        $scope.q4count10 = response.data.records[10].Count;
        $scope.q4count11 = response.data.records[11].Count;
        $scope.q4count12 = response.data.records[12].Count;
        $scope.q4count13 = response.data.records[13].Count;
        $scope.q4count14 = response.data.records[14].Count;
        $scope.q4count15 = response.data.records[15].Count;
        $scope.q4count16 = response.data.records[16].Count;
        $scope.q4count17 = response.data.records[17].Count;
        $scope.q4count18 = response.data.records[18].Count;
        $scope.q4count19 = response.data.records[19].Count;
        $scope.q4count20 = response.data.records[20].Count;
        $scope.q4count21 = response.data.records[21].Count;
        $scope.q4count22 = response.data.records[22].Count;
        $scope.q4count23 = response.data.records[23].Count;
        drawChartq4();
        });
    google.charts.load("current", {packages:["timeline"]});
    google.charts.setOnLoadCallback(drawChartq4);
    function drawChartq4() {
        let container = document.getElementById('chartq4_div');
        let chart = new google.visualization.Timeline(container);
        let dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Role' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
            [ 'No.of times slept b/w the time period', $scope.q4count0 , new Date(0,0,0,0,0,0), new Date(0,0,0,1,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count1 , new Date(0,0,0,1,0,0), new Date(0,0,0,2,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count2 , new Date(0,0,0,2,0,0), new Date(0,0,0,3,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count3 , new Date(0,0,0,3,0,0), new Date(0,0,0,4,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count4 , new Date(0,0,0,4,0,0), new Date(0,0,0,5,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count5 , new Date(0,0,0,5,0,0), new Date(0,0,0,6,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count6 , new Date(0,0,0,6,0,0), new Date(0,0,0,7,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count7 , new Date(0,0,0,7,0,0), new Date(0,0,0,8,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count8 , new Date(0,0,0,8,0,0), new Date(0,0,0,9,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count9 , new Date(0,0,0,9,0,0), new Date(0,0,0,10,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count10 , new Date(0,0,0,10,0,0), new Date(0,0,0,11,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count11 , new Date(0,0,0,11,0,0), new Date(0,0,0,12,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count12 , new Date(0,0,0,12,0,0), new Date(0,0,0,13,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count13 , new Date(0,0,0,13,0,0), new Date(0,0,0,14,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count14 , new Date(0,0,0,14,0,0), new Date(0,0,0,15,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count15 , new Date(0,0,0,15,0,0), new Date(0,0,0,16,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count16 , new Date(0,0,0,16,0,0), new Date(0,0,0,17,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count17 , new Date(0,0,0,17,0,0), new Date(0,0,0,18,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count18 , new Date(0,0,0,18,0,0), new Date(0,0,0,19,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count19 , new Date(0,0,0,19,0,0), new Date(0,0,0,20,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count20 , new Date(0,0,0,20,0,0), new Date(0,0,0,21,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count21 , new Date(0,0,0,21,0,0), new Date(0,0,0,22,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count22 , new Date(0,0,0,22,0,0), new Date(0,0,0,23,0,0) ],
            [ 'No.of times slept b/w the time period', $scope.q4count23 , new Date(0,0,0,23,0,0), new Date(0,0,0,24,0,0) ],

        ]);

        let options = {
            timeline: {groupByRowLabel: true, showRowLabels: false,  rowLabelStyle: { fontSize: 100 }, barLabelStyle: { fontSize: 20 }},
            'width':1300,
            'height':500,
            //avoidOverlappingGridLines: false,

        };
        chart.draw(dataTable, options);
    }
    //query 4 ends here

    //query 5 starts here
    //query 5 get dropdown values
    $('#query5_dropdown1_options li').on('click', function () {
        $scope.q5_dd_op1 = $(this).text();
        $('.query5_dropdown1').html($(this).find('a').html());
    });

    $scope.query5_1 = function () {
        if ($scope.q5_dd_op1 === '> 8 hours') {
            duration = '> 8 ';
        }
        else if ($scope.q5_dd_op1 === '7 - 8 hours') {
            duration = 'between 7.0 and 7.99';
        }
        else if ($scope.q5_dd_op1 === '6 - 7 hours') {
            duration = 'between 6.0 and 6.99';
        }
        else if ($scope.q5_dd_op1 === '5 - 6 hours') {
            duration = 'between 5.0 and 5.99';
        }
        else if ($scope.q5_dd_op1 === '4 - 5 hours') {
            duration = 'between 4.0 and 4.99';
        }
        else if ($scope.q5_dd_op1 === '3 - 4 hours') {
            duration = 'between 3.0 and 3.99';
        }
        else if ($scope.q5_dd_op1 === '< 3 hours') {
            duration = '< 3';
        }
        else {
            alert("Please select valid input");
        }

    }

//query 5 ends here
});
