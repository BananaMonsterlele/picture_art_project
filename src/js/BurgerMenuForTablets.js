function BurgerMenuForTablets () {
	let burger = document.getElementsByClassName('burger-wrapper')[0],
		burgerMenu = document.querySelector('.burger-menu');

	document.querySelector('.burger').style.display = 'none';
		
	if(document.documentElement.clientWidth <= 768){
		document.querySelector('.burger').style.display = '';
		burger.addEventListener('touchstart', function (event) {
			if(burgerMenu.style.display == 'block'){
				burgerMenu.style.display = 'none';
			} else {
				burgerMenu.style.display = 'block';
			}
		})
	} 
	window.addEventListener('resize', () => {
		if(document.documentElement.clientWidth > 768){
			burgerMenu.style.display = 'none';
			burger.style.display = 'none';
		} else {
			burger.style.display = 'block';
		}
	})
}

module.exports = BurgerMenuForTablets;