var loginForm = document.querySelector(".login-form");
var inputLogin = document.querySelector("[name=login-login]");
var inputPassword = document.querySelector("[name=login-password]");

var myMap;

var feedbackButton = document.querySelector(".button-feedback");
var popup = document.querySelector(".pop-up");
var popupOverlay = document.querySelector(".pop-up-overlay");
var popupClose = document.querySelector(".pop-up-close");
var popupInputName = popup.querySelector("[name=feedback-name]");
var popupInputEmail = popup.querySelector("[name=feedback-email]");
var feedbackForm = popup.querySelector("form");
var feedbackMessage = popup.querySelector("[name=feedback-message]");

var isStorageSupportLogin = true;
var storageLogin = "";

var isStorageSuportFeedback = true;
var storageFeedbackName = "";
var storageFeedbackEmail = "";

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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.939314, 30.327959],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Магазин мороженого «Глэйси»'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/pin.svg',
            iconImageSize: [80, 140],
            iconImageOffset: [-40, -140]
        });

    myMap.geoObjects
        .add(myPlacemark)
});

try {
  storageFeedbackName = localStorage.getItem("FeedbackName");
  storageFeedbackEmail = localStorage.getItem("FeedbackEmail");
} catch (err) {
  isStorageSuportFeedback = false;
}

feedbackButton.addEventListener("click",
  function(evt) {
    evt.preventDefault();
    popup.classList.add("pop-up-active");
    popupOverlay.classList.add("pop-up-overlay-active");

    if (storageFeedbackName, storageFeedbackEmail) {
    popupInputName.value = storageFeedbackName;
    popupInputEmail.value = storageFeedbackEmail;
    feedbackMessage.focus();
    } else {
    popupInputName.focus();
  }
});

popupClose.addEventListener("click",
  function(evt) {
    popup.classList.remove("pop-up-active");
    popup.classList.remove("pop-up-error");
    popupOverlay.classList.remove("pop-up-overlay-active");
  }
);

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    if (popup.classList.contains("pop-up-active")){
      evt.preventDefault();
      popup.classList.remove("pop-up-active");
      popup.classList.remove("pop-up-error");
      popupOverlay.classList.remove("pop-up-overlay-active");
    }
  }
});

popupOverlay.addEventListener("click", function(evt) {
  if (popup.classList.contains("pop-up-active")) {
    popup.classList.remove("pop-up-active");
    popup.classList.remove("pop-up-error");
    popupOverlay.classList.remove("pop-up-overlay-active");
  }
});

popupInputName.required = false;
popupInputEmail.required = false;
feedbackMessage.required = false;

feedbackForm.addEventListener("submit", function (evt) {
  if (!popupInputName.value || !popupInputEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    popup.classList.remove("pop-up-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("pop-up-error");
      if (!popupInputName.value) {
        popupInputName.focus();
      }
      if (popupInputName.value && (!popupInputEmail.value || !feedbackMessage.value)) {
        popupInputEmail.focus();
      }
      if ((popupInputName.value && popupInputEmail.value) && !feedbackMessage.value) {
        feedbackMessage.focus();
      }
    } else {
    if (isStorageSuportFeedback) {
      localStorage.setItem("FeedbackName", popupInputName.value);
      localStorage.setItem("FeedbackEmail", popupInputEmail.value);
    }
  }
});
