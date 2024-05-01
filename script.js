document.getElementById("loginForm").addEventListener("submit", function(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var valid = true;
  let a = 0;
  let b = 0;

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (!username.match(/^[a-zA-Z0-9]+$/)) {
    usernameError.textContent = "Username must contain only letters and numbers.";
    valid = false;
    a = 1 ; 
  }

  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    valid = false;
    a = 1;
  }
  
  if (!valid) {
    event.preventDefault();
  }
});
