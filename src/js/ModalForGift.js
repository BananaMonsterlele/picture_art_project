function ModalForGift () {
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
		giftShow(overlay, more);
	});	
	close.addEventListener('click', () => {
		giftHide(overlay);
	});	
	window.addEventListener('click', function(event){
			if(overlay.style.display == 'block' && event.target == overlay){
			giftHide();
		}
	})
}

module.exports = ModalForGift;