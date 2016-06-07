<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Welcome</title>

	<style>
		html, body {
			font-family: 'arial', sans-serif;
			background-color: #e3f745;
		}
	</style>

</head>
<body>

<?php

$value = $_POST['numberFormat1'];
if ($value == '') {
	$value = $_POST['numberFormat2'];
}
echo 'Input value after submit: <strong>'.$value.'</strong>';

?>

</body>
</html>
