import switchDocumentBodyLock from "../../../../js/switchDocumentBodyLock";

let switchFormBtns = document.querySelectorAll('.show-form'),
	menuBody = document.querySelector('.menu__body'),
	forms = document.querySelector('.menu__forms');

for (let switchFormBtn of switchFormBtns) {
	switchFormBtn.addEventListener('click', () => {
		let formType = switchFormBtn.getAttribute('data-form-type');

		menuBody.classList.add('active');
		forms.classList.remove('recovery-form-wrapper', 'register-form-wrapper', 'login-form-wrapper');
		forms.classList.add(`${formType}-wrapper`, 'active');
		switchDocumentBodyLock('lock')
	})
}