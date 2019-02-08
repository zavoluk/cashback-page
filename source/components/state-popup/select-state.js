let statePopup = document.querySelector('.state-popup'),
	stateItems = document.querySelectorAll('.state-popup__item'),
	authorisedItems = document.querySelectorAll('.authorised-item'),
	notAuthorisedItems = document.querySelectorAll('.not-authorised-item');

for (let stateItem of stateItems) {
	stateItem.addEventListener('click', () => {
		let isAuthorised = stateItem.getAttribute('data-authorised') !== 'true';

		statePopup.parentNode.removeChild(statePopup);
		if (isAuthorised) {
			userIsNotAuthorised()
		} else {
			userIsAuthorised()
		}
	})
}

function userIsNotAuthorised() {
	for (let authorisedItem of authorisedItems) {
		authorisedItem.parentNode.removeChild(authorisedItem)
	}
}

function userIsAuthorised() {
	for (let notAuthorisedItem of notAuthorisedItems) {
		notAuthorisedItem.parentNode.removeChild(notAuthorisedItem)
	}
}