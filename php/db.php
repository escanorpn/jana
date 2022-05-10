
<?php
//session_start();
	error_reporting(E_ALL);
ini_set('display_errors', 1);

		$servername="localhost";
		$username="root";
		$password="";
		$dbname="kk";
/*
$servername="sql201.ultimatefreehost.in";
		$username="ltm_18946229";
		$password="alchemy771997";
		$dbname="ltm_18946229_v";
		*/
	$conn=mysqli_connect($servername,$username,$password,$dbname);

	if(!$conn){
		die("connection failed:".mysqli_connect_error());
	}
	$data1 = json_decode(file_get_contents('php://input'), true);
	$data=$data1['fieldsValue'];

?>
