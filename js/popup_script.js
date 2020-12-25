var link = document.querySelector(".user-list__login");
var popup = document.querySelector(".popup--login");
var close = document.querySelector(".popup__close");


link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("popup--show");
});
close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("popup--show");
});