var loginForm = document.querySelector(".login-form");
var inputLogin = document.querySelector("[name=login-login]");
var inputPassword = document.querySelector("[name=login-password]");

var isStorageSupportLogin = true;
var storageLogin = "";

try {
  storageLogin = localStorage.getItem("Login");
} catch (err) {
  isStorageSupportLogin = false;
}

if (isStorageSupportLogin) {
  inputLogin.value = storageLogin;
}

loginForm.addEventListener("submit", function (evt) {
  if (!inputLogin.value || !inputPassword.value) {
    evt.preventDefault();
    } else {
    if (isStorageSupportLogin) {
      localStorage.setItem("Login", inputLogin.value);
    }
  }
});
