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

$sql = "SELECT Day,count(*) as count1 FROM `table_2` WHERE ((slept>='4:00:00' AND Slept<='20:59:00')) and ((`how felt afterwards`>=4) and (`How easy got up` >=4)) GROUP by Day";

$run = mysqli_query($conn, $sql);

$output = "";
while( $rows = mysqli_fetch_assoc($run)){
if ($output != "") {$output .= ",";}
    $output .= '{"Day":"'  . $rows["Day"] . '",';
    $output .= '"Count":"'. $rows["count1"]     . '"}';
}

$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>