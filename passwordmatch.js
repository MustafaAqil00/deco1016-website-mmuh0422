// Confirm password validation code sourced from https://stackoverflow.com/questions/21727317/how-to-check-confirm-password-field-in-form-without-reloading-page

var check = function() {
    // if statement checks whether the password is identical to the confirm password
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    // if so, a green message appears signaling to the user that the passwords match
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
      // if not, a red message appears showing that the passwords do not match
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}