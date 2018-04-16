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
if(isset($_GET['var2'])){
$var2 = $_GET['var2'];
}
if(isset($_GET['var3'])){
$var3 = $_GET['var3'];
}

$sql = "SELECT (`How felt afterwards`) as rating_after,COUNT(*) as count1 FROM `tbl_name` where (slept between '21:00' and '3:00') and (duration $var1) GROUP by (`How felt afterwards`)";

$run = mysqli_query($conn, $sql);

$output = "";
while( $rows = mysqli_fetch_assoc($run)){
if ($output != "") {$output .= ",";}
    $output .= '{"rating_after":"'  . $rows["rating_after"] . '",';
    $output .= '"count1":"'. $rows["count1"]     . '"}';
}
$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>