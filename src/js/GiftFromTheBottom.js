function GiftFromTheBottom () {
	let buttonCounter = 0,
		buttonArr = document.getElementsByTagName('button');

	for(let i = 0; i < buttonArr.length; i++){
		buttonArr[i].addEventListener('click', () => {
			buttonCounter++;
		})
	}

	window.addEventListener('scroll', function scroll (){
		if(buttonCounter == 0){
			if(document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight){
					let more = document.querySelector('.fixed-gift'),
						overlay = document.querySelector('.popup-gift'),
						close = document.querySelector('.popup-closed'); 
						overlay.style.display = 'block';
						more.style.display = 'none';
						document.body.style.overflow = 'hidden';
					close.addEventListener('click', () => {
						overlay.style.display = 'none';
						document.body.style.overflow = '';
					});	
					window.addEventListener('click', function(event){
							if(overlay.style.display == 'block' && event.target == overlay){
							overlay.style.display = 'none';
							document.body.style.overflow = '';
						}
					})	
			}
		}
			

		if(overlay.style.display == 'block'){
			window.removeEventListener('scroll', scroll)
		}

	})

}

module.exports = GiftFromTheBottom;