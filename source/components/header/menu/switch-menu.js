let showMenuBtn = document.querySelector('.header__switch-menu'),
	hideMenuBtn = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu__inner'),
	forms = menu.querySelectorAll('.menu__forms');

showMenuBtn.addEventListener('click', () => {
	switchMenu('show')
});

hideMenuBtn.addEventListener('click', () => {
	switchMenu('hide')
});

function switchMenu(_state) {
	let state = _state.toUpperCase();

	switch (state) {
		case 'SHOW':
			menu.classList.add('active');
			break;
		case 'HIDE':
			menu.classList.remove('active');
			if(forms) {
				setTimeout(() => {
					for(let form of forms) {
						form.classList.remove('active', 'register-form-wrapper', 'login-form-wrapper')
					}
				}, 200)
			}
			break;
		default:
			throw new Error(`${_state} is not valid state`)
	}
}