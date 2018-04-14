<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$server = "localhost";
$username = "hackthon";
$password= "hackthon";
$db = "csv_db";

$conn = mysqli_connect($server,$username,$password,$db);

if(isset($_GET['var1'])){
$var1 = $_GET['var1'];
}

$sql = "SELECT Day,AVG(`how felt afterwards`) as Avg_hft FROM `table_2` WHERE slept>='21:00:00' AND Slept<='23:59:00' or Slept>='00:00:00' and Slept<='03:00:00' GROUP by Day";

$run = mysqli_query($conn, $sql);

$output = "";
while( $rows = mysqli_fetch_assoc($run)){
if ($output != "") {$output .= ",";}
    $output .= '{"Day":"'  . $rows["Day"] . '",';
    $output .= '"Avg_hft":"'. $rows["Avg_hft"]     . '"}';

}
$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>