// =======================================
//
// Author : Salman
// Email : salman31@outlook.co.id
// Github : github.com/salman31
//
// =======================================

$.fn.numberseparator = function(options){

    var settings = $.extend({
        addedEvery: 4,
        separator: "-",
        idErrorMessage: "error_m",
        idForm: "form_target",
        keepFormatOnSubmit: true
    }, options);

    var addedEvery = settings.addedEvery;
    var separator = settings.separator;
    var separatorPattern = new RegExp("[" + separator + "]","g");
    var idErrorMessage = "#" + settings.idErrorMessage;
    var keepFormatOnSubmit = settings.keepFormatOnSubmit;
    var idForm = settings.idForm;
    var element = this;

    $(element).bind("input propertychange", function(e){

        // return if value null
        var input_value = e.target.value;
        if (input_value == "") return;

        // replace space with nothing
        var input_value_nospace = e.target.value.replace(/ /g, "");

        // if has separator, replace with nothing
        var input_value_nosepar = input_value_nospace.replace(separatorPattern,"");

        // add separator
        var value_split = input_value_nosepar.match(new RegExp(".{1," + addedEvery + "}","g")).join(separator);

        // false if there is separator
        var value_separator = input_value.match(separatorPattern);
        var value_separator_result = (value_separator != null && value_separator.length >= 0) ? false : true;

        // true if there is alphabet
        var value_alphabet = input_value_nospace.match(/[a-z]/g);
        var value_alphabet_result = (value_alphabet != null && value_alphabet.length > 0) ? true : false;

        if (!$.isNumeric(input_value_nospace) && (value_separator_result || value_alphabet_result)) {
            // Show error when is not number and show error message
            errorMessage(true);
            $(element).val("");
        } else {
            errorMessage(false);
            $(element).val(value_split);
        }
    });

    $(element).keydown(function(e){

        // Allow: backspace, delete, tab, escape, enter, dot(.), comma(,), f5
        if ($.inArray(e.keyCode, [8,46,9,27,13,190,188,116]) !== -1 ||

            // Allow: ctrl+a, command+a
            (e.keyCode == 65 && (e.ctrlKey || e.metaKey)) ||

            // Allow: ctrl+c, command+c
            (e.keyCode == 67 && (e.ctrlKey || e.metaKey)) ||

            // Allow: ctrl+x, command+x
            (e.keyCode == 88 && (e.ctrlKey || e.metaKey)) ||

            // Allow: ctrl+v, command+v
            (e.keyCode == 86 && (e.ctrlKey || e.metaKey)) ||

            // Allow: home, end, pgup, pgdown, left, right, down, up
            (e.keyCode >= 33 && e.keyCode <= 40) ||

            // Allow: shift, ctrl, alt
            (e.keyCode >= 16 && e.keyCode <= 18)) {

            // Let it happen, don't do anything
            return;
        }
    });

    // show hide error message
    $(element).blur(function(){ errorMessage(false); });
    function errorMessage(flag) {
        $(idErrorMessage).hide();
        if (flag) {
            $(idErrorMessage).show();
        }
    }
    errorMessage(false);

    // onload : adding separator into value
    function addSeparator(addedEvery, separator) {
        var input_value_nosepar = $(element).val().replace(separatorPattern,"");
        var value_onload = "";
        if (input_value_nosepar != "") {
            value_onload = input_value_nosepar.match(new RegExp(".{1," + addedEvery + "}","g")).join(separator);
        }
        $(element).val(value_onload);
    }
    addSeparator(addedEvery, separator);

    // submit value
    if (!keepFormatOnSubmit) {
        $("#" + idForm).submit(function(e) {
            var value_submit = $(element).val();
            var value_submit_result = value_submit.replace(separatorPattern,"");
            $(element).val(value_submit_result);
        });
    }

};
