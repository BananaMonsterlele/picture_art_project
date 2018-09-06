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
		close = document.querySelector('.popup-closer'); 
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


	//ModalForGift

	let more = document.querySelector('.fixed-gift'),
		overlay = document.querySelector('.popup-gift'),
		close = document.querySelector('.popup-closed'); 

	more.addEventListener('click', function  () {
		overlay.style.display = 'block';
		more.style.display = 'none';
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


	//ShowMoreContent

		let moreContent = document.querySelector('.button-styles'),
			moreBlocks = document.querySelectorAll('.styles-2');
		

		moreContent.addEventListener('click', function(){
			for(let i = 0; i < moreBlocks.length; i++){
				moreBlocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
				moreBlocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
			}
			this.style.display = `none`;
		})
			


	//Tabs
	let portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
		portfolioBtn = document.getElementsByClassName('btn'),
		portfolioWrapper = document.querySelector('.portfolio-wrapper'),
		portfolioBlock = document.querySelectorAll('.portfolio-block'),
		portfolioNo = document.querySelector('.portfolio-no');

	portfolioMenu.addEventListener('click', function(event){
		if(event.target.classList.contains('all')){
			for(let i = 0; i < portfolioBlock.length; i++){
				if(portfolioBlock[i].classList.contains('all')){
					portfolioBlock[i].style.display = 'block';
				} else {
					portfolioBlock[i].style.display = 'none';
				}
			}
			for(let i = 0; i < portfolioBtn.length; i++){
				portfolioBtn[i].classList.remove('active');
			}
			event.target.classList.add('active');
		}
		if(event.target.classList.contains('chef')){
			for(let i = 0; i < portfolioBlock.length; i++){
				if(portfolioBlock[i].classList.contains('chef')){
					portfolioBlock[i].style.display = 'block';
				} else {
					portfolioBlock[i].style.display = 'none';
				}
			}
			for(let i = 0; i < portfolioBtn.length; i++){
				portfolioBtn[i].classList.remove('active');
			}
			event.target.classList.add('active');
		}
		if(event.target.classList.contains('girl')){
			for(let i = 0; i < portfolioBlock.length; i++){
				if(portfolioBlock[i].classList.contains('girl')){
					portfolioBlock[i].style.display = 'block';
				} else {
					portfolioBlock[i].style.display = 'none';
				}
			}
			for(let i = 0; i < portfolioBtn.length; i++){
				portfolioBtn[i].classList.remove('active');
			}
			event.target.classList.add('active');
		}
		if(event.target.classList.contains('guy')){
			for(let i = 0; i < portfolioBlock.length; i++){
				if(portfolioBlock[i].classList.contains('guy')){
					portfolioBlock[i].style.display = 'block';
				} else {
					portfolioBlock[i].style.display = 'none';
				}
			}
			for(let i = 0; i < portfolioBtn.length; i++){
				portfolioBtn[i].classList.remove('active');
			}
			event.target.classList.add('active');
		}
		if(event.target.classList.contains('lovers')){
			for(let i = 0; i < portfolioBlock.length; i++){
				if(portfolioBlock[i].classList.contains('lovers')){
					portfolioBlock[i].style.display = 'block';
				} else {
					portfolioBlock[i].style.display = 'none';
				}
			}
			for(let i = 0; i < portfolioBtn.length; i++){
				portfolioBtn[i].classList.remove('active');
			}
			event.target.classList.add('active');
		}
		if(event.target.classList.contains('grandmother') || event.target.classList.contains('granddad')){
			for(let i = 0; i < portfolioBlock.length; i++){
				if(portfolioBlock[i].classList.contains('grandmother') || portfolioBlock[i].classList.contains('granddad')){
					portfolioBlock[i].style.display = 'block';
				} else {
					portfolioBlock[i].style.display = 'none';
					portfolioNo.style.display = 'block';

				}
			}
			for(let i = 0; i < portfolioBtn.length; i++){
				portfolioBtn[i].classList.remove('active');
			}
			event.target.classList.add('active');
		}
	})




})