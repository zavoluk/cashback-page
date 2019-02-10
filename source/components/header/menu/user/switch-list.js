let avatar = document.querySelector('.user__avatar'),
	list = document.querySelector('.menu__list');

avatar.addEventListener('click', () => {
	avatar.classList.toggle('active');
	list.classList.toggle('active')
});

document.addEventListener('click', (e) => {
	let target = e.target;

	if ((!target.classList.contains('menu__list') && !target.closest('.menu__list')) && !target.classList.contains('user__avatar')) {
		hideList()
	}
});

function hideList() {
	avatar.classList.remove('active');
	list.classList.remove('active')
}