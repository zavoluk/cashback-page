import {hideForms} from "../switch-menu";

let formsWrapper = document.querySelector('.menu__forms');

formsWrapper.addEventListener('click', (e) => {
	let target = e.target;

	if (target.classList.contains('menu__forms') || target.classList.contains('menu__forms-inner')) {
		hideForms()
	}
});