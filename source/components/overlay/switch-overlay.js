import {switchMenu} from "../header/menu/switch-menu";
import switchDocumentBodyLock from "../../js/switchDocumentBodyLock";

let overlay = document.querySelector('.overlay');

export function showOverlay(element) {
	if (overlay) {
		switchOverlay('show', element ? element : null)
	}
}

export function hideOverlay(element) {
	if (overlay) {
		switchOverlay('hide', element ? element : null)
	}
}

overlay.addEventListener('click', () => {
	switchMenu('hide')
});

function switchOverlay(_state, element) {
	let state = _state.toUpperCase();

	switch (state) {
		case 'SHOW':
			overlay.classList.add('active');
			switchDocumentBodyLock('lock');
			if (element) {
				element.classList.add('active');
			}
			break;
		case 'HIDE':
			overlay.classList.remove('active');
			switchDocumentBodyLock('unlock');
			if (element) {
				element.classList.remove('active')
			}
			break;
		default:
			throw new Error(`${_state} is not valid state`)
	}
}