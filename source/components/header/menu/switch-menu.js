import {hideOverlay, showOverlay} from "../../overlay/switch-overlay";

let showMenuBtn = document.querySelector('.header__switch-menu'),
	hideMenuBtns = document.querySelectorAll('.menu__close'),
	menu = document.querySelector('.menu__inner'),
	menuBody = document.querySelector('.menu__body'),
	forms = menu.querySelectorAll('.menu__forms');

showMenuBtn.addEventListener('click', () => {
	switchMenu('show')
});

for (let hideMenuBtn of hideMenuBtns) {
	hideMenuBtn.addEventListener('click', () => {
		switchMenu('hide')
	});
}

export function switchMenu(_state) {
	let state = _state.toUpperCase();

	switch (state) {
		case 'SHOW':
			showOverlay(menu);
			break;
		case 'HIDE':
			hideOverlay(menu);
			if (forms) {
				hideForms()
			}
			break;
		default:
			throw new Error(`${_state} is not valid state`)
	}
}

export function hideForms() {
	if (forms) {
		menuBody.classList.remove('active');
		setTimeout(() => {
			for (let form of forms) {
				form.classList.remove('active', 'register-form-wrapper', 'login-form-wrapper', 'recovery-form-wrapper')
			}
		}, 200)
	}
}