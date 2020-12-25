var slider_item4 = document.querySelector(".reviews__item--1");
var slider_item5 = document.querySelector(".reviews__item--2");
var slider_item6 = document.querySelector(".reviews__item--3");
var slider_link4 = document.querySelector(".reviews__toggle--1");
var slider_link5 = document.querySelector(".reviews__toggle--2");
var slider_link6 = document.querySelector(".reviews__toggle--3");


slider_link4.addEventListener("click", function(evt) {
	evt.preventDefault();
	slider_item4.classList.add("slider__item--show");
	slider_item5.classList.remove("slider__item--show");
	slider_item6.classList.remove("slider__item--show");
	slider_link4.classList.add("reviews__toggle--active");
	slider_link5.classList.remove("reviews__toggle--active");
	slider_link6.classList.remove("reviews__toggle--active");
});
slider_link5.addEventListener("click", function(evt) {
	evt.preventDefault();
	slider_item4.classList.remove("slider__item--show");
	slider_item5.classList.add("slider__item--show");
	slider_item6.classList.remove("slider__item--show");
	slider_link4.classList.remove("reviews__toggle--active");
	slider_link5.classList.add("reviews__toggle--active");
	slider_link6.classList.remove("reviews__toggle--active");
});
slider_link6.addEventListener("click", function(evt) {
	evt.preventDefault();
	slider_item4.classList.remove("slider__item--show");
	slider_item5.classList.remove("slider__item--show");
	slider_item6.classList.add("slider__item--show");
	slider_link4.classList.remove("reviews__toggle--active");
	slider_link5.classList.remove("reviews__toggle--active");
	slider_link6.classList.add("reviews__toggle--active");
});