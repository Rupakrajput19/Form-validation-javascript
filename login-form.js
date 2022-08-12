// Validation for Login-form

let login_email = document.getElementById("login_email");
let login_password = document.getElementById("login_password");
let returnval = 1;

function login_form_validation() {
  // validation for email
  if (login_email.value == "") {
    document.getElementById("login_email_error").innerHTML =
      "**Email is Required!";
    returnval = 0;
  } else if (login_email.value.indexOf("@") <= 0) {
    document.getElementById("login_email_error").innerHTML =
      "**Invalid @ position, Enter valid email id";
    returnval = 0;
  } else if (
    login_email.value.charAt(login_email.value.length - 4) != "." &&
    login_email.value.charAt(login_email.value.length - 3) != "."
  ) {
    document.getElementById("login_email_error").innerHTML =
      "**Invalid . position, Enter valid email id.";
    returnval = 0;
  } else {
    document.getElementById("login_email_error").innerHTML = "";
    returnval = 1;
  }

  // validation for password
  if (login_password.value == "") {
    document.getElementById("login_password_error").innerHTML =
      "**password is Required!";
    returnval = 0;
  } else if (
    login_password.value.length < 8 ||
    login_password.value.length > 20
  ) {
    document.getElementById("login_password_error").innerHTML =
      "**password must be in bettween 8 and 20 character.";
    returnval = 0;
  } else if (login_password.value !== "123456789") {
    document.getElementById("login_password_error").innerHTML =
      "**Wrong password! </br> (Password Hint:- '123456789' )";
    returnval = 0;
  } else {
    document.getElementById("login_password_error").innerHTML = "";
    returnval = 1;
  }

  if (returnval) {
    return true;
  } else {
    return false;
  }
}
