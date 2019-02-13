import switchDocumentBodyLock from "../../js/switchDocumentBodyLock";

let statePopup = document.querySelector('.state-popup'),
	stateItems = document.querySelectorAll('.state-popup__item'),
	authorisedItems = document.querySelectorAll('.authorised-item'),
	notAuthorisedItems = document.querySelectorAll('.not-authorised-item'),
	header = document.querySelector('.header'),
	head = document.querySelector('.header__menu');

switchDocumentBodyLock('lock');

for (let stateItem of stateItems) {
	stateItem.addEventListener('click', () => {
		let isAuthorised = stateItem.getAttribute('data-authorised') !== 'true';

		statePopup.parentNode.removeChild(statePopup);
		if (isAuthorised) {
			userIsNotAuthorised()
		} else {
			userIsAuthorised()
		}
		switchDocumentBodyLock('unlock');
	})
}

function userIsNotAuthorised() {
	for (let authorisedItem of authorisedItems) {
		authorisedItem.parentNode.removeChild(authorisedItem)
	}
}

function userIsAuthorised() {
	header.classList.add('header_authorised');
	head.classList.add('header__menu_authorised');
	for (let notAuthorisedItem of notAuthorisedItems) {
		notAuthorisedItem.parentNode.removeChild(notAuthorisedItem)
	}
}