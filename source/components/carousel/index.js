import Swiper from 'swiper'

export default function (params) {
	let options = params ? params.options : null,
		container = params ? params.container : null;

	new Swiper(container, options);
}