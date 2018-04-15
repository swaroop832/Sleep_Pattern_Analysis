<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$server = "localhost";
$username = "hackthon";
$password= "hackthon";
$db = "csv_db";

$conn = mysqli_connect($server,$username,$password,$db);

$sql = "SELECT '0:00 - 1:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '0:00' and '01:00'
UNION ALL
SELECT '1:00 - 2:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '01:01' and '02:00'
UNION ALL
SELECT '2:00 - 3:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '02:01' and '03:00'
UNION ALL
SELECT '3:00 - 4:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '03:01' and '04:00'
UNION ALL
SELECT '4:00 - 5:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '04:01' and '05:00'
UNION ALL
SELECT '5:00 - 6:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '05:01' and '06:00'
UNION ALL
SELECT '6:00 - 7:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '06:01' and '07:00'
UNION ALL
SELECT '7:00 - 8:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '07:01' and '08:00'
union ALL
SELECT '8:00 - 9:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '08:01' and '09:00'
UNION ALL
SELECT '9:00 - 10:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '09:01' and '10:00'
union ALL
SELECT '10:00 - 11:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '10:01' and '11:00'
UNION ALL
SELECT '11:00 - 12:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '11:01' and '12:00'
UNION ALL
SELECT '12:00 - 13:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '12:01' and '13:00'
UNION ALL
SELECT '13:00 - 14:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '13:01' and '14:00'
UNION ALL
SELECT '14:00 - 15:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '14:01' and '15:00'
UNION ALL
SELECT '15:00 - 16:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '15:01' and '16:00'
UNION ALL
SELECT '16:00 - 17:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '16:01' and '17:00'
union ALL
SELECT '17:00 - 18:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '17:01' and '18:00'
UNION ALL
SELECT '18:00 - 19:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '18:01' and '19:00'
UNION ALL
SELECT '19:00 - 20:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '19:01' and '20:00'
union ALL
SELECT '20:00 - 21:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '20:01' and '21:00'
UNION ALL
SELECT '21:00 - 22:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '21:01' and '22:00'
union ALL
SELECT '22:00 - 23:00'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '22:01' and '23:00'
union ALL
SELECT '23:00 - 23:59'  as time,count(*) FROM `table_3` WHERE slept BETWEEN '23:01' and '23:59'";

$run = mysqli_query($conn, $sql);

$output = "";
while( $rows = mysqli_fetch_assoc($run)){
    if ($output != "") {$output .= ",";}
    $output .= '{"Time":"'  . $rows["time"] . '",';
    $output .= '"Count":"'. $rows["count(*)"]     . '"}';

}
$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>