const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close'),
   		menuLinks = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

menuLinks.addEventListener('click', () => {
   menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
		lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});

// Page up

$(document).scroll(function () {
	if ($(this).scrollTop() > 600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

