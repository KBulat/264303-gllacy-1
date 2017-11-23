var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".btn-close");
var login = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=feedback-name]");
var message = popup.querySelector("[name=feedback-message]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
