function ModalForDesign () {
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
}

module.exports = ModalForDesign;