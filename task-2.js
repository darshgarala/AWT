  function validateForm(event) {
   // Prevent form submission
    // Clear any existing error messages

    // Get form inputs
    const fullName = document.getElementById("full-name");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const state = document.getElementById("state");
    const agreement = document.getElementById("agreement");

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z ]+$/;
    const usernameRegex = /^[A-Za-z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true; // Flag to track overall form validity

    // Validate Full Name
    if (!nameRegex.test(fullName.value)) {
        document.getElementById('full-name-error').style.color = "red";
        document.getElementById('full-name-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate Username
    if (!usernameRegex.test(username.value)) {
        document.getElementById('username-error').style.color = "red";
        document.getElementById('username-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate Password
    if (!passwordRegex.test(password.value)) {
        document.getElementById('password-error').style.color = "red";
        document.getElementById('password-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate Confirm Password
    if (confirmPassword.value !== password.value) {
        document.getElementById('confirm-password-error').style.color = "red";
        document.getElementById('confirm-password-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate Phone No
    if (!phoneRegex.test(phone.value)) {
        document.getElementById('"phone-error').style.color = "red";
        document.getElementById('"phone-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate Email
    if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').style.color = "red";
        document.getElementById('email-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate State
    if (state.value === "") {
        document.getElementById('state-error').style.color = "red";
        document.getElementById('state-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    // Validate Agreement checkbox
    if (!agreement.checked) {
      document.getElementById('agreement-error').style.color = "red";
        document.getElementById('agreement-error').innerHTML = " *Please input a value";
      isValid = false;
    }

    if (isValid) {
      // All inputs are valid, redirect to login page
      window.location.href = "login.html";
    }
  }



  // Attach event listener to form submission
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", validateForm);

