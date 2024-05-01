// script.js
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var valid = true;
  
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    if (!username.match(/^[a-zA-Z0-9]+$/)) {
      usernameError.textContent = "Username must contain only letters and numbers.";
      valid = false;
    }
  
    if(!email.match(/^[A-Za-z0-9_\.]{1,}@[A-Za-z]{1,}\.[A-Za-z]{2,5}$/)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }
  
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
      valid = false;
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      valid = false;
    }
    
    return valid;
  }
  