/*  */
var slideIndex = 1;
showSlides(slideIndex);
/*
function nextSlide() {
	showSlides(slideIndex += 1);
}
function previousSlide() {
	showSlides(slideIndex -= 1);
}
*/
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("block-view__wrap");
	var dots = document.getElementsByClassName("control-dots__item");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}
/*  */
document.getElementById('incMenu').onclick = function() {
	open()
};

function open() {
    document.getElementById('menu').classList.toggle("show");
}
/*  */
var menu = document.querySelector('.header__wrap');

document.onscroll = function() {

  if (window.scrollY > 0 && !menu.classList.contains('scroll__wrap')) {
    menu.classList.add('scroll__wrap');
  }

  if (window.scrollY <= 0 && menu.classList.contains('scroll__wrap')) {
    menu.classList.remove('scroll__wrap');
  }
  
};