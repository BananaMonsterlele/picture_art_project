window.addEventListener('DOMContentLoaded', () => {

	//TopSlider

		let slideIndex = 1,
			slides = document.getElementsByClassName('main-slider-item'),
			wrap = document.querySelector('.main-slider');


			
		showSlides(slideIndex);

		function showSlides(n){

			if(n > slides.length){
				slideIndex = 1;
			}
			if(n < 1) {
				slideIndex = slides.length;
			}

			for(let i = 0; i < slides.length; i++){
				slides[i].style.display = 'none';
			}

			slides[slideIndex - 1].style.display = 'flex';
		}	

		let show = setInterval(function() {
			showSlides(slideIndex += 1);
		}, 7000);


		function currentSlide (n) {
			showSlides(slideIndex = n);
		}

	
	//ModalForDesign

	let length = document.querySelectorAll('.button-design').length;
	for(let i = 0; i < length; i++){
		let more = document.querySelectorAll('.button-design')[i],
		overlay = document.querySelector('.popup-design'),
		close = document.querySelector('.popup-close'); 

		more.addEventListener('click', function  () {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});	
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

	//ModalForConsultation

	let length1 = document.querySelectorAll('.button-consultation').length;
	for(let i = 0; i < length1; i++){
		let more1 = document.querySelectorAll('.button-consultation')[i],
		overlay1 = document.querySelector('.popup-consultation'),
		close1 = document.querySelector('.popup-close'); 

		more1.addEventListener('click', function  () {
			overlay1.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});	
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
})