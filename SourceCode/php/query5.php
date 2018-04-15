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

$sql = "SELECT SEC_TO_TIME(AVG(TIME_TO_SEC($var1)))  avg , $var3 as column_name FROM `table_3` where $var2 group by $var3";

$run = mysqli_query($conn, $sql);

$output = "";
while( $rows = mysqli_fetch_assoc($run)){
if ($output != "") {$output .= ",";}
    $output .= '{"column_name":"'  . $rows["column_name"] . '",';
    $output .= '"Avg":"'. $rows["avg"]     . '"}';
}
$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>