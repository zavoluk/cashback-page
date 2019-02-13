let documentBody = document.body;

export default function (_state) {
	let state = _state.toUpperCase();

	switch (state) {
		case 'LOCK':
			documentBody.classList.add('no-scroll');
			break;
		case 'UNLOCK':
			documentBody.classList.remove('no-scroll');
			break;
		default:
			throw new Error(`${state} is not valid state`)
	}
}