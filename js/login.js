var loginForm = document.querySelector(".login-form");
var inputLogin = document.querySelector("[name=login-login]");
var inputPassword = document.querySelector("[name=login-password]");

var isStorageSuportLogin = true;
var storageLogin = "";

try {
  storageLogin = localStorage.getItem("Login");
} catch (err) {
  isStorageSupportLogin = false;
}

feedbackForm.addEventListener("submit", function (evt) {
  if (!inputLogin.value || !inputPassword.value) {
    evt.preventDefault();
    console.log("Fill out the fields!");
    } else {
    if (isStorageSuportFeedback) {
      localStorage.setItem("Login", inputLogin.value);
    }
  }
});
