let favoriteBtns = document.querySelectorAll('.shop-tile__favorite');

for (let favoriteBtn of favoriteBtns) {
	favoriteBtn.addEventListener('click', () => {
		favoriteBtn.classList.toggle('active')
	})
}