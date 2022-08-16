// Validation for Login-form

let login_email = document.getElementById("login_email");
let login_password = document.getElementById("login_password");

function clearError(){
  errors = document.getElementsByClassName("error");
  for(let item of errors)
  {
    item.innerHTML = "";
  }
}

function login_form_validation() {
  let returnval = true;
  clearError();
  
  // validation for email
  if (login_email.value.trim() == "") {
    document.getElementById("login_email_error").innerHTML = "**Email is Required!";
    returnval = false;
  } 


  // validation for password
  if (login_password.value.trim() == "") {
      document.getElementById("login_password_error").innerHTML =
        "**Password is Required!";
      returnval = false;
    } 
    else if ((login_password.value.trim().length < 8) || (login_password.value.trim().length > 20)) {
      document.getElementById("login_password_error").innerHTML =
      "**Password must be in bettween 8 and 20 character.";
      returnval = false;
    } 
    else if (login_password.value !== "Rupak19@#") {
       document.getElementById("login_password_error").innerHTML =
         "**Wrong password! </br>   (Password Hint:- 'Rupak19@#' )";
       returnval = false;
     }

    
    return returnval;
}
