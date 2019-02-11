let selectedFilterWrapper = document.querySelector('.filter__selected'),
	list = document.querySelector('.filter__list'),
	selectedFilter = selectedFilterWrapper.querySelector('.filter__list-item'),
	listItems = document.querySelectorAll('.filter__list-item-selectable');

selectedFilterWrapper.addEventListener('click', () => {
	switchList({
		toggle: true
	})
});

document.addEventListener('click', (e) => {
	let target = e.target;
	if (!target.classList.contains('filter__selected') && !target.closest('.filter')) {
		switchList({
			state: 'hide'
		})
	}
});

for (let listItem of listItems) {
	listItem.addEventListener('click', () => {
		selectedFilter.innerText = listItem.innerText;
		for (let listItem of listItems) {
			listItem.classList.remove('active')
		}
		listItem.classList.add('active');
		switchList({
			state: 'hide'
		})
	})
}

function switchList(params) {
	let state = params && params.state ? params.state.toUpperCase() : '',
		toggle = !!params.toggle;

	if (toggle) {
		list.classList.toggle('active');
	} else {
		switch (state) {
			case 'SHOW':
				list.classList.add('active');
				break;
			case 'HIDE':
				list.classList.remove('active');
				break;
			default:
				throw new Error(`${params.state} is not valid state`)
		}
	}
}