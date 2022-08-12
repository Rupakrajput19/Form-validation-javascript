// Validation for Registration-form

let Name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let returnvalue = 1;

function form_validation() {
  // validation for name
  if (Name.value == "") {
    document.getElementById("name_error").innerHTML = "**Name is Required!";
    returnvalue = 0;
  } else if (!isNaN(Name.value)) {
    document.getElementById("name_error").innerHTML =
      "**Numbers are not allowed in name.";
    returnvalue = 0;
  } else if (Name.value.length < 3 || Name.value.length > 20) {
    document.getElementById("name_error").innerHTML =
      "**Name must be in bettween 3 and 20 character.";
    returnvalue = 0;
  } else {
    document.getElementById("name_error").innerHTML = "";
    returnvalue = 1;
  }

  // validation for email
  if (email.value == "") {
    document.getElementById("email_error").innerHTML = "**Email is Required!";
    returnvalue = 0;
  } else if (email.value.indexOf("@") <= 0) {
    document.getElementById("email_error").innerHTML =
      "**Invalid @ position, Enter valid email id.";
    returnvalue = 0;
  } else if (
    email.value.charAt(email.value.length - 4) != "." &&
    email.value.charAt(email.value.length - 3) != "."
  ) {
    document.getElementById("email_error").innerHTML =
      "**Invalid . position, Enter valid email id.";
    returnvalue = 0;
  } else {
    document.getElementById("email_error").innerHTML = "";
    returnvalue = 1;
  }

  // validation for mobile
  if (mobile.value == "") {
    document.getElementById("mobile_error").innerHTML =
      "**Mobile number Required!";
    returnvalue = 0;
  } else if (mobile.value.length != 10) {
    document.getElementById("mobile_error").innerHTML =
      "**Enter the ten digit mobile number.";
    returnvalue = 0;
  } else if (isNaN(mobile.value)) {as
    document.getElementById("mobile_error").innerHTML =
      "**Enter the numbers only.";
    returnvalue = 0;
  } else {
    document.getElementById("mobile_error").innerHTML = "";
    returnvalue = 1;
  }

  // validation for password
  if (password.value == "") {
    document.getElementById("password_error").innerHTML =
      "**Password is Required!";
    returnvalue = 0;
  }else if (password.value.length < 8 || password.value.length > 20) {
    document.getElementById("password_error").innerHTML =
      "**Password must be in bettween 8 and 20 character.";
    returnvalue = 0;
  } else {
    document.getElementById("password_error").innerHTML = "";
    returnvalue = 1;
  }

  // validation for confrim password
  if (cpassword.value == "") {
    document.getElementById("cpassword_error").innerHTML =
      "**Confirm Password is Required!";
    returnvalue = 0;
  } else if (password.value !== cpassword.value) {
    document.getElementById("cpassword_error").innerHTML =
      "**Password must be same as above.";
    returnvalue = 0;
  } else {
    document.getElementById("cpassword_error").innerHTML = "";
    returnvalue = 1;
  }
  if (returnvalue) {
    return true;
  } else {
    return false;
  }
}
