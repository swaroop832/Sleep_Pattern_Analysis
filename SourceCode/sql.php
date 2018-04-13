<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$server = "localhost";
$username = "hackthon";
$password= "hackthon";
$db = "csv_db";

$conn = mysqli_connect($server,$username,$password,$db);

$sql = "SELECT * FROM tbl_name";

$run = mysqli_query($conn, $sql);
$output = "";
while( $rows = mysqli_fetch_assoc($run)){
if ($output != "") {$output .= ",";}
    $output .= '{"Date":"'  . $rows["Date"] . '",';
    $output .= '"Slept":"'   . $rows["Slept"]        . '",';
    $output .= '"Got up":"'. $rows["Got up"]     . '"}';
}
$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>