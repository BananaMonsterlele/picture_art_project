function TimeoutForMinute () {
	let overlay1 = document.querySelector('.popup-consultation'),
		close1 = document.querySelector('.popup-close'); 


	let timeout = setTimeout(function(){
		if(overlay.style.display == 'block' || document.getElementsByClassName('popup-design')[0].style.display == 'block'){
			clearInterval(timeout);
		} else {
			overlay1.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}	
	},60000)

	close1.addEventListener('click', () => {
		overlay1.style.display = 'none';
		document.body.style.overflow = '';

	});	
	window.addEventListener('click', function(event){
			if(overlay1.style.display == 'block' && event.target == overlay1){
			overlay1.style.display = 'none';
			document.body.style.overflow = '';
		}
		})
}

module.exports = TimeoutForMinute;