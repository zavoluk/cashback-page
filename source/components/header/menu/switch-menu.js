let showMenuBtn = document.querySelector('.header__switch-menu'),
	hideMenuBtn = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu__inner');

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
			break;
		default:
			throw new Error(`${_state} is not valid state`)
	}
}