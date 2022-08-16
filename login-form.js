// Validation for Login-form

let login_email = document.getElementById("login_email");
let login_password = document.getElementById("login_password");

function data_stored() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;

  sessionStorage.setItem("Name", name);
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Mobile No.", mobile);
  sessionStorage.setItem("Password", password);

  return;
}

let stored_email = sessionStorage.getItem("Email");
let stored_password = sessionStorage.getItem("Password");

function clearError() {
  errors = document.getElementsByClassName("error");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function login_form_validation() {
  let returnval = true;
  clearError();

  // validation for email
  if (login_email.value.trim() == "") {
    document.getElementById("login_email_error").innerHTML =
      "**Email is Required!";
    returnval = false;
  } else if (!(login_email.value.match(/[@]/)) || !(login_email.value.match(/[.]/))) {
    document.getElementById("login_email_error").innerHTML =
      "**Enter Valid Email Address!";
    returnval = false;
  } else if (login_email.value.indexOf("@") <= 0) {
    document.getElementById("login_email_error").innerHTML = "**Invalid @ Position!";
    returnval = false;
  } else if (
    (login_email.value.charAt(login_email.value.length - 4) != ".") &&
   (login_email.value.charAt(login_email.value.length - 3) != ".")
  ) {
    document.getElementById("login_email_error").innerHTML = "**Invalid . Position!";
    returnval = false;
  } else if (login_email.value !== stored_email) {
    document.getElementById("login_email_error").innerHTML =
      "**No user with this email address found,<br>Please Registered with us!";
    returnval = false;
  }

  // validation for password
  if (login_password.value.trim() == "") {
    document.getElementById("login_password_error").innerHTML =
      "**Password is Required!";
    returnval = false;
  } else if (
    login_password.value.trim().length < 8 ||
    login_password.value.trim().length > 20
  ) {
    document.getElementById("login_password_error").innerHTML =
      "**Password must be in bettween 8 and 20 character.";
    returnval = false;
  } else if (login_password.value !== stored_password) {
    document.getElementById("login_password_error").innerHTML =
      "**Wrong password!";
    returnval = false;
  }

  return returnval;
}
