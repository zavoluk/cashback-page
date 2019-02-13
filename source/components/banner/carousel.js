import carousel from '../carousel'

let options = {
	loop: true,
	navigation: {
		nextEl: '.banner__navigation-item__next',
		prevEl: '.banner__navigation-item__prev',
	},
	pagination: {
		el: '.banner-pagination',
		clickable: true
	}
};

carousel({
	container: '.banner-container',
	options: options
});