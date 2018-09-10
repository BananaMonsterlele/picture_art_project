function Modal () {
	let length1 = document.querySelectorAll('.button-consultation').length;
	for(let i = 0; i < length1; i++){
		let more = document.querySelectorAll('.button-consultation')[i],
		overlay = document.querySelector('.popup-consultation'),
		close = document.querySelector('.popup-close'); 

		more.addEventListener('click', function  () {
			giftShow(overlay)
		});	
		close.addEventListener('click', () => {
			giftHide(overlay)

		});	
		window.addEventListener('click', function(event){
				if(overlay.style.display == 'block' && event.target == overlay){
				giftHide(overlay)
			}
		})
	}	

	let length = document.querySelectorAll('.button-design').length;
	for(let i = 0; i < length; i++){
		let more = document.querySelectorAll('.button-design')[i],
		overlay = document.querySelector('.popup-design'),
		close = document.querySelector('.popup-closer'); 
		more.addEventListener('click', function  () {
			giftShow(overlay);
		});	
		close.addEventListener('click', () => {
			giftHide(overlay);
		});	
		window.addEventListener('click', function(event){
				if(overlay.style.display == 'block' && event.target == overlay){
				giftHide(overlay);
			}
			})
	}

	function giftShow (overlay) {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function giftHide (overlay) {
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}

	let more = document.querySelector('.fixed-gift'),
		overlay = document.querySelector('.popup-gift'),
		close = document.querySelector('.popup-closed'); 

	more.addEventListener('click', function  () {
		more.style.display = 'none';
		giftShow(overlay);
	});	
	close.addEventListener('click', () => {
		giftHide(overlay);
	});	
	window.addEventListener('click', function(event){
			if(overlay.style.display == 'block' && event.target == overlay){
			giftHide();
		}
	})

	//Gift

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

module.exports = Modal;