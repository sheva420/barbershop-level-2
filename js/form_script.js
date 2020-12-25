var form_link = document.querySelector(".sign-up__button");
var form_popup = document.querySelector(".popup--success");
var form_close = document.querySelector(".popup--success .popup__button");

form_link.addEventListener("click", function(evt) {
	evt.preventDefault();
	form_popup.classList.add("popup--show");
});
form_close.addEventListener("click", function(evt) {
	evt.preventDefault();
	form_popup.classList.remove("popup--show");
});