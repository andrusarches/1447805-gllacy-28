var feedbackButton = document.querySelector(".button-feedback");
var popup = document.querySelector(".pop-up");
var popupOverlay = document.querySelector(".pop-up-overlay");
var popupClose = document.querySelector(".pop-up-close");
var popupInputName = popup.querySelector("[name=feedback-name]");
var popupInputEmail = popup.querySelector("[name=feedback-email]");
var feedbackForm = popup.querySelector("form");
var feedbackMessage = popup.querySelector("[name=feedback-message]");

var isStorageSuportFeedback = true;
var storageFeedbackName = "";
var storageFeedbackEmail = "";

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

feedbackForm.addEventListener("submit", function (evt) {
  if (!popupInputName.value || !popupInputEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    console.log("1111!!!!");
    popup.classList.remove("pop-up-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("pop-up-error");
    } else {
    if (isStorageSuportFeedback) {
      localStorage.setItem("FeedbackName", popupInputName.value);
      localStorage.setItem("FeedbackEmail", popupInputEmail.value);
    }
  }
});
