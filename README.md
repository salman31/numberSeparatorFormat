# Number Separator Format
Make input only allow numbers with separator format. [Demo](http://bit.ly/numberseparatorformat)

### Install
```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>

<!-- jQuery number format separtor -->
<script	src="./number-separator-format.jquery.min.js"></script>
```

### Basic Uses
```javascript
$(document).ready(function(){
	$("#account_number").numberseparator();
});
```

### Uses With Parameter
```javascript
$(document).ready(function(){
	$("#account_number").numberseparator({
		addedEvery: 4,
		separator: "-",
		idErrorMessage: "error_m",
		idForm: "form_target",
		keepFormatOnSubmit: false
	});
});
```

### Options Parameter
Variable | Type
------------ | -------------
addedEvery | Integer
separator | String
idErrorMessage | String
idForm | String
keepFormatOnSubmit | Boolean
