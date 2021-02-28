const form = document.getElementById("formFreeTrial");
const firstName = document.getElementById("firstName");

const firstNameError = document.querySelector("#firstName + span.error");
const iconErrorName = document.getElementById("iconErrorName");

firstName.addEventListener("input", () => {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstNameError.className = "error";
    iconErrorName.className = "iconErrorDisable";
  } else {
    showError();
  }
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
}
