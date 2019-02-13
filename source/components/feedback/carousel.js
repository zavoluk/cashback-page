import carousel from '../carousel'

let options = {
	slidesPerView: 2,
	loop: true,
	spaceBetween: -180,
	navigation: {
		nextEl: '.feedback__navigation-item__next',
		prevEl: '.feedback__navigation-item__prev',
	},
	pagination: {
		el: '.feedback-pagination',
		clickable: true
	},
	breakpoints: {
		1164: {
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 0,
		}
	},
};

carousel({
	container: '.feedback-container',
	options: options
});