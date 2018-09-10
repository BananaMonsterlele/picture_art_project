function LowetSlider () {
	function lowerSlider(){
		let slideIndex = 1,
			slides = document.getElementsByClassName('feedback-slider-item'),
			prev = document.querySelector('.main-prev-btn'),
			next = document.querySelector('.main-next-btn'),
			wrap = document.querySelector('.feedback-slider');

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
			slides[slideIndex - 1].style.display = 'block';
		}	

		function plusSlides (n) {
			showSlides(slideIndex += n);
		}

		prev.addEventListener('click', function(){
			plusSlides(-1);
			slides[slideIndex - 1].classList.add('animated', 'fadeInRight');
			document.getElementsByTagName('body')[0].style.cssText = `overflow-x: hidden`;
		});
		next.addEventListener('click', function(){
			plusSlides(1);
			slides[slideIndex - 1].classList.add('animated', 'fadeInLeft');
			document.getElementsByTagName('body')[0].style.cssText = `overflow-x: hidden`;
		});

		function currentSlide (n) {
			showSlides(slideIndex = n);
		}

		let showLowerSlider = setInterval(() => {
			showSlides(slideIndex += 1);
		}, 7000);

	}
	lowerSlider()
}


module.exports = LowetSlider;