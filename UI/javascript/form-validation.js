const passwordField = $("#password"),
    repeatPasswordField = $("#passwordRepeat"),
    termsCheckbox = $("#terms");

/*
* added || !termsAreChecked()
* */
function validateForm() {
    if (!isPasswordLengthValid() || !passwordsAreMatch() || !termsAreChecked()) {
        alert("Failed to create account")
        return false
    }

    alert("Account created successfully")
    return true

}
/*
* changed second passwordText.length > 17 to passwordText.length > 16
* */
function isPasswordLengthValid() {
    const passwordText = passwordField.val()
    if (passwordText.length > 16 || passwordText.length < 6) {
        setBorderColour(passwordField, "red")
        return false
    }
    return true
}
/*
* changed second passwordField.val() to repeatPasswordField.val()
* */
function passwordsAreMatch() {
    if (passwordField.val() !== repeatPasswordField.val()) {
        setBorderColour(passwordField, "red")
        setBorderColour(repeatPasswordField, "red")
        return false
    }
    return true
}
/*
* changed second !termsCheckbox.is(':checked') to !termsCheckbox.prop('checked')
* */
function termsAreChecked() {
    if (!termsCheckbox.prop('checked')) {
        setBorderColour($("#termsAndConditions"), "red")
        return false
    }
    return true
}

function setBorderColour(field, colour) {
    field.css("border-style", "solid")
    field.css("border-color", colour)
}