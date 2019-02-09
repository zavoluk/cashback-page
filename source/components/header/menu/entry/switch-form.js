let switchFormBtns = document.querySelectorAll('.entry__item'),
	forms = document.querySelector('.menu__forms');

for (let switchFormBtn of switchFormBtns) {
	switchFormBtn.addEventListener('click', () => {
		let formType = switchFormBtn.getAttribute('data-form-type');

		forms.classList.add(`${formType}-wrapper`, 'active');
	})
}