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

	//ModalForConsultation

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
				if(overlay1.style.display == 'block' && event.target == overlay1){
				giftHide(overlay)
			}
			})
	}	


	//ModalForGift

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
		portfolioNo = document.querySelector('.portfolio-no'),
		classes = ['all', 'chef', 'guy', 'girl', 'lovers', 'grandmother', 'granddad'];


	portfolioMenu.addEventListener('click', function(event){
		for(let a = 0; a < classes.length; a++){
			if(event.target.classList.contains(classes[a])){
				for(let i = 0; i < portfolioBlock.length; i++){
					if(portfolioBlock[i].classList.contains(classes[a])){
						portfolioBlock[i].style.display = 'block';
						portfolioNo.style.display = 'none';
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
				portfolioNo.style.display = 'block';
				console.log(11)
				for(let i = 0; i < portfolioBtn.length; i++){
					portfolioBtn[i].classList.remove('active');
				}
				event.target.classList.add('active');
			}
		}
		
	})


	//MouseEnterShowing

	let block = document.getElementsByClassName('sizes-block'),
		blockImg = document.getElementsByClassName('size-image'),
		blockText = document.getElementsByClassName('sizes-bloc_text');
		function showPic(i) {
			blockImg[i].setAttribute('src', `img/sizes-${i+1}-${1}.png`);
		}
		function showText(i) {
			blockImg[i].setAttribute('src', `img/sizes-${i+1}.png`);
		}
	for(let i = 0; i < block.length; i++){
		block[i].addEventListener('mouseenter', function(){
			showPic(i);
			blockText[i].style.display = 'none';
		})
		block[i].addEventListener('mouseleave', function(){
			showText(i);
			blockText[i].style.display = 'block';
		})
		block[i].addEventListener('touchstart', function(event){
			showPic(i);
			blockText[i].style.display = 'none';
			if(event.target != block[i]){
				showText(i);
				blockText[i].style.display = 'block';
			}
		})
	}


	//TimeoutForMinute


	let overlay1 = document.querySelector('.popup-consultation'),
		close1 = document.querySelector('.popup-close'); 


	let timeout = setTimeout(function(){
		console.log(overlay)
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
	// console.log(document.querySelector('.footer').getBoundingClientRect().top + pageYOffset);
	// console.log(window.pageYOffset + document.querySelector('.footer').getBoundingClientRect().top);

	window.addEventListener('scroll', function scroll (){
		if(window.pageYOffset + 1000 > document.documentElement.scrollHeight){
			console.log("Yra bluya")
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
	// function getCoords(elem) { 
	//   let box = elem.getBoundingClientRect();

	//   return {
	//     top: box.top + pageYOffset,
	//     left: box.left + pageXOffset
	//   };

	// }
	// console.log(getCoords(document.querySelector('.footer')));
	
	// window.addEventListener('scroll', function scroll (){
	// 	console.log(window.pageYOffset);
	// 	console.log(document.documentElement.scrollHeight)
	// })


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

	//Accordion

	let accordionTitle = document.querySelectorAll('.accordion-heading'),
		accordionBlock = document.querySelectorAll('.accordion-block');


	for(let i = 0; i < accordionTitle.length; i++){
		accordionBlock[i].style.display = 'none';
		accordionTitle[i].addEventListener('click', function() {
			accordionTitle[i].classList.add('ui-accordion-header-active');
			if(accordionBlock[i].style.display == ''){
				accordionBlock[i].style.display = 'none';
				accordionTitle[i].classList.remove('ui-accordion-header-active');
				accordionBlock[i].classList.remove('slideInDown');
				accordionBlock[i].classList.add('slideInUp');
			} else {
				for(let a = 0; a < accordionBlock.length; a++){
					accordionBlock[a].style.display = 'none';
					accordionTitle[a].classList.remove('ui-accordion-header-active');
				}
				accordionBlock[i].style.display = '';
				accordionTitle[i].classList.add('ui-accordion-header-active');
				accordionBlock[i].classList.remove('slideInUp');
				accordionBlock[i].classList.add('slideInDown');
			}
		})
	}	


	//Calculator

		let totalValue = document.getElementsByClassName('calc-price')[0],
			size = document.querySelector('#size'),
			material = document.querySelector('#material'),
			options = document.querySelector('#options'),
			promo = document.querySelector('.promocode'),
			sizeSum = 0,
			materialSum = 0,
			total = 0;

		totalValue.innerHTML = '0';

		function calc () {
			let a = total;
			a = a * this.value;
			totalValue.innerHTML = total;	
		}
		
		size.addEventListener('change', function(){
			sizeSum = +this.value;
			total =  sizeSum * materialSum;
			if(material.value == '0'){
				totalValue.innerHTML = '0';
			} else {
				calc.call(size);
			}
			promoCode();
	 	});

		material.addEventListener('change', function(){
			materialSum = +this.value;
			total =  sizeSum * materialSum;
			if(size.value == '0'){
				totalValue.innerHTML = '0';
			} else {
				calc.call(material);
			}
			promoCode();
		});	

		options.addEventListener('change', function(){
			total =  sizeSum * materialSum;
			console.log(total)
			if(size.value == '' || material.value == ''){
				totalValue.innerHTML = '0';
			} else {
				let a = total;
				a = a * this.value;
				totalValue.innerHTML = a;	
			}
			promoCode();
		});

		function promoCode() {
			if(promo.value == 'IWANTPOPART'){
				totalValue.innerHTML = totalValue.innerHTML * 0.7;
			}
		}

		promo.addEventListener('change', ()=>{
			promoCode();
		})


	// AJAX

	let message = {},
		formArr = document.getElementsByClassName('main-form');
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';


	for(let y = 0; y < formArr.length; y++){
		let	form = formArr[y],
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

		
		form.addEventListener('submit', function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX

			let formData = new FormData(form);

					let request = new XMLHttpRequest();

					request.open("POST", "../server.php");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

					request.onreadystatechange = function(){
						if (request.readyState < 4){
							statusMessage.innerHTML = message.loading
						} else if(request.readyState === 4){
							if(request.status == 200 && request.status < 300){
								// Добавляем контент на страницу
								statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
								statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
								setInterval(function(){
									statusMessage.style.cssText = 'display:none';
								}, 1000);
							}
							else {
								statusMessage.innerHTML = '<img src="img/failed.png" alt="Failed">';
								statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
							}
						}
					};

					request.send(formData);
					clearInput();
			// 	})
			// }

			function clearInput(){
				for(let i = 0; i < input.length; i++){
					input[i].value = '';
					// Очищаем поля ввода
				}
			}

		});	
	}	
})