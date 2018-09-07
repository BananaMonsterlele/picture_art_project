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


	//MouseEnterShowing

	let block = document.getElementsByClassName('sizes-block'),
		blockImg = document.getElementsByClassName('size-image'),
		blockText = document.getElementsByClassName('sizes-bloc_text');

	for(let i = 0; i < block.length; i++){
		block[i].addEventListener('mouseenter', function(){
			blockImg[i].setAttribute('src', `img/sizes-${i+1}-${1}.png`);
			blockText[i].style.display = 'none';
		})
		block[i].addEventListener('mouseleave', function(){
			blockImg[i].setAttribute('src', `img/sizes-${i+1}.png`);
			blockText[i].style.display = 'block';
		})
		block[i].addEventListener('touchstart', function(event){
			blockImg[i].setAttribute('src', `img/sizes-${i+1}-${1}.png`);
			blockText[i].style.display = 'none';
			if(event.target != block[i]){
				blockImg[i].setAttribute('src', `img/sizes-${i+1}.png`);
				blockText[i].style.display = 'block';
			}
		})
	}


	//TimeoutForMinute


	let overlay1 = document.querySelector('.popup-consultation'),
		close1 = document.querySelector('.popup-close'); 


	let timeout = setTimeout(function(){
		
			overlay1.style.display = 'block';
			document.body.style.overflow = 'hidden';
		
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

	//BurgerMenuForTablets

	let burger = document.getElementsByClassName('burger-wrapper')[0],
		burgerMenu = document.querySelector('.burger-menu');

		
	if(document.documentElement.clientWidth <= 768){
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


	//GiftFromTheBottom
	// console.log(document.documentElement.offsetHeight)
	// console.log(window.pageYOffset)

	window.addEventListener('scroll', function scroll (){
		if(window.pageYOffset == 13113){
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
		if(overlay.style.display == 'block'){
			window.removeEventListener('scroll', scroll)
		}
	})


	//LowetSlider

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
				slides[slideIndex - 1].classList.add('animated', 'fade');
				wrap.style.cssText = `overflow: hidden`;
			});
			next.addEventListener('click', function(){
				plusSlides(1);
				slides[slideIndex - 1].classList.add('animated', 'fade');
				wrap.style.cssText = `overflow: hidden`;
			});

			function currentSlide (n) {
				showSlides(slideIndex = n);
			}

			let showLowerSlider = setInterval(() => {
				showSlides(slideIndex += 1);
			}, 7000);

		}
		lowerSlider()


})