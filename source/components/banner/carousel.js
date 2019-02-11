import Swiper from 'swiper'

let options = {
	loop: true,
	navigation: {
		nextEl: '.banner__navigation-item__next',
		prevEl: '.banner__navigation-item__prev',
	},
	pagination: {
		el: '.carousel-pagination',
		clickable: true
	}
};

let mySwiper = new Swiper('.swiper-container', options);