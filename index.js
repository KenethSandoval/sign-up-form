const form = document.getElementById("formFreeTrial");

const firstName = document.getElementById("firstName");
const firstNameError = document.querySelector("#firstName + span.error");
const iconErrorName = document.getElementById("iconErrorName");

const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector("#lastName + span.error");
const iconErrorLastName = document.getElementById("iconErrorLastName");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const iconErrorEmail = document.getElementById("iconErrorEmail");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const iconErrorPassword = document.getElementById("iconErrorPassword");

firstName.addEventListener("input", () => {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstNameError.className = "error";
    iconErrorName.className = "iconErrorDisable";
  } else {
    showError();
  }
});

lastName.addEventListener("input", () => {
  if (lastName.validity.valid) {
    lastNameError.textContent = "";
    lastNameError.className = "error";
    iconErrorLastName.className = "iconErrorDisable";
  } else {
    showError();
  }
});


email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    iconErrorEmail.className = "iconErrorDisable";
  } else {
    showError();
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    iconErrorPassword.className = "iconErrorDisable";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (
    !firstName.validity.valid ||
    !lastName.validity.valid ||
    !email.validity.valid ||
    !password.validity.valid
  ) {
    showError();
    event.preventDefault();
    return false;
  }
  alert("Correct");
});

const showError = () => {
  if (!firstName.validity.valid) {
    firstName.className = "errorActive";
    iconErrorName.className = "iconError";
  }
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "First Name cannot be empty";
  } else if (firstName.validity.patternMismatch) {
    firstNameError.textContent = "First name cannot contain number";
  }

  if (!lastName.validity.valid) {
    lastName.className = "errorActive";
    iconErrorLastName.className = "iconError";
  }
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "Last Name cannot be empty";
  } else if (lastName.validity.patternMismatch) {
    lastNameError.textContent = "Last name cannont contain number";
  }
  
  if (!email.validity.valid) {
    email.className = "errorActive";
    iconErrorEmail.className = "iconError";
  }
  if (email.validity.valueMissing) {
    emailError.textContent = "Email cannot be empty";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Looks like this is not an email";
  }
  
  if (!password.validity.valid) {
    password.className = "errorActive";
    iconErrorPassword.className = "iconError";
  }
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password cannot be empty";
  } else if (password.validity.typeMismatch) {
    passwordError.textContent = "Password must be at least 6 characters";
  }
}
