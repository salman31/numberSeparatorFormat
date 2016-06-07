<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Welcome</title>

	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>

	<!-- jQuery number format separtor -->
	<script	src="./number-separator-format.jquery.min.js"></script>

	<script>
		$(document).ready(function(){
			$("#account_number1").numberseparator({
				addedEvery: 4,
				separator: "-",
				idErrorMessage: "error_m1",
				idForm: "form_target",
				keepFormatOnSubmit: true
			});
			$("#account_number2").numberseparator({
				addedEvery: 4,
				separator: "-",
				idErrorMessage: "error_m2",
				idForm: "form_target",
				keepFormatOnSubmit: false
			});
		});
	</script>

	<style>
		html, body {
			font-family: 'arial', sans-serif;
			background-color: #e3f745;
		}
		span {
			color: red;
		}
		.container {
			margin: 50px;
		}
		input[type="text"] {
			width: 250px;
		}
	</style>

</head>
<body>

	<div class="container">
		<form action="NumberSeparatorFormatController.php" method="post" id="form_target">
			<strong>Account Number :</strong><br/>
			<input name="numberFormat1" type="text" id="account_number1" autocomplete="off">
			<button type="submit" name="button">submit (keep format:true)</button>
			<span id="error_m1">Only numbers.</span>

			<br/>
			<br/>
			<strong>Account Number :</strong><br/>
			<input name="numberFormat2" type="text" id="account_number2" autocomplete="off">
			<button type="submit" name="button">submit (keep format:false)</button>
			<span id="error_m2">Only numbers.</span>
		</form>
	</div>

	<div class="container">
		<strong>Disallowed:</strong><br/>
		peterpanalways<br/>
		pete-rpan-alwa-ys<br/>
		pete rpan alwa ys<br/>
		pet$erp!an@alwa*ys<br/>
		12d34(56*789+0
	</div>

	<div class="container">
		<strong>Allowed:</strong><br/>
		1234567891011123<br/>
		12-34-56-78-91-01-11-23<br/>
		12 34 56 78 91 01 11 23<br/>
		1234 5678 9101 1123
	</div>

</body>
</html>
