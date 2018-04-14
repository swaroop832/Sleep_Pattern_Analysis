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

$sql = "SELECT * FROM `table_3`";

$run = mysqli_query($conn, $sql);
$output = "";
while( $rows = mysqli_fetch_assoc($run)){
if ($output != "") {$output .= ",";}
    $output .= '{"Date":"'  . $rows["Date"] . '",';
    $output .= '"Slept":"'   . $rows["Slept"]        . '",';
    $output .= '"Day":"'   . $rows["Day"]        . '",';
    $output .= '"Got up":"'. $rows["Got_up"]     . '"}';
}
$output ='{"records":['.$output.']}';
$conn->close();
echo($output);
?>