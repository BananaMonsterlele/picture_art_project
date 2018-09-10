'use strict';

window.addEventListener('DOMContentLoaded', function () {

	//TopSlider

	var slideIndex = 1,
	    slides = document.getElementsByClassName('main-slider-item'),
	    wrap = document.querySelector('.main-slider');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex - 1].style.display = 'flex';
	}

	var show = setInterval(function () {
		showSlides(slideIndex += 1);
	}, 7000);

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	//ModalForDesign

	var length = document.querySelectorAll('.button-design').length;

	var _loop = function _loop(i) {
		var more = document.querySelectorAll('.button-design')[i],
		    overlay = document.querySelector('.popup-design'),
		    close = document.querySelector('.popup-closer');
		more.addEventListener('click', function () {
			giftShow(overlay);
		});
		close.addEventListener('click', function () {
			giftHide(overlay);
		});
		window.addEventListener('click', function (event) {
			if (overlay.style.display == 'block' && event.target == overlay) {
				giftHide(overlay);
			}
		});
	};

	for (var i = 0; i < length; i++) {
		_loop(i);
	}

	//ModalForConsultation

	var length1 = document.querySelectorAll('.button-consultation').length;

	var _loop2 = function _loop2(i) {
		var more = document.querySelectorAll('.button-consultation')[i],
		    overlay = document.querySelector('.popup-consultation'),
		    close = document.querySelector('.popup-close');

		more.addEventListener('click', function () {
			giftShow(overlay);
		});
		close.addEventListener('click', function () {
			giftHide(overlay);
		});
		window.addEventListener('click', function (event) {
			if (overlay1.style.display == 'block' && event.target == overlay1) {
				giftHide(overlay);
			}
		});
	};

	for (var i = 0; i < length1; i++) {
		_loop2(i);
	}

	//ModalForGift

	function giftShow(overlay) {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function giftHide(overlay) {
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}

	var more = document.querySelector('.fixed-gift'),
	    overlay = document.querySelector('.popup-gift'),
	    close = document.querySelector('.popup-closed');

	more.addEventListener('click', function () {
		more.style.display = 'none';
		giftShow(overlay, more);
	});
	close.addEventListener('click', function () {
		giftHide(overlay);
	});
	window.addEventListener('click', function (event) {
		if (overlay.style.display == 'block' && event.target == overlay) {
			giftHide();
		}
	});

	//ShowMoreContent

	var moreContent = document.querySelector('.button-styles'),
	    moreBlocks = document.querySelectorAll('.styles-2');

	moreContent.addEventListener('click', function () {
		for (var i = 0; i < moreBlocks.length; i++) {
			moreBlocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			moreBlocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		}
		this.style.display = 'none';
	});

	//Tabs
	var portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
	    portfolioBtn = document.getElementsByClassName('btn'),
	    portfolioWrapper = document.querySelector('.portfolio-wrapper'),
	    portfolioBlock = document.querySelectorAll('.portfolio-block'),
	    portfolioNo = document.querySelector('.portfolio-no'),
	    classes = ['all', 'chef', 'guy', 'girl', 'lovers', 'grandmother', 'granddad'];

	portfolioMenu.addEventListener('click', function (event) {
		for (var a = 0; a < classes.length; a++) {
			if (event.target.classList.contains(classes[a])) {
				for (var i = 0; i < portfolioBlock.length; i++) {
					if (portfolioBlock[i].classList.contains(classes[a])) {
						portfolioBlock[i].style.display = 'block';
						portfolioNo.style.display = 'none';
					} else {
						portfolioBlock[i].style.display = 'none';
					}
				}
				for (var _i = 0; _i < portfolioBtn.length; _i++) {
					portfolioBtn[_i].classList.remove('active');
				}
				event.target.classList.add('active');
			}
			if (event.target.classList.contains('grandmother') || event.target.classList.contains('granddad')) {
				portfolioNo.style.display = 'block';
				for (var _i2 = 0; _i2 < portfolioBtn.length; _i2++) {
					portfolioBtn[_i2].classList.remove('active');
				}
				event.target.classList.add('active');
			}
		}
	});

	//MouseEnterShowing

	var block = document.getElementsByClassName('sizes-block'),
	    blockImg = document.getElementsByClassName('size-image'),
	    blockText = document.getElementsByClassName('sizes-bloc_text');
	function showPic(i) {
		blockImg[i].setAttribute('src', 'img/sizes-' + (i + 1) + '-' + 1 + '.png');
	}
	function showText(i) {
		blockImg[i].setAttribute('src', 'img/sizes-' + (i + 1) + '.png');
	}

	var _loop3 = function _loop3(i) {
		block[i].addEventListener('mouseenter', function () {
			showPic(i);
			blockText[i].style.display = 'none';
		});
		block[i].addEventListener('mouseleave', function () {
			showText(i);
			blockText[i].style.display = 'block';
		});
		block[i].addEventListener('touchstart', function (event) {
			showPic(i);
			blockText[i].style.display = 'none';
			if (event.target != block[i]) {
				showText(i);
				blockText[i].style.display = 'block';
			}
		});
	};

	for (var i = 0; i < block.length; i++) {
		_loop3(i);
	}

	//TimeoutForMinute


	var overlay1 = document.querySelector('.popup-consultation'),
	    close1 = document.querySelector('.popup-close');

	var timeout = setTimeout(function () {
		if (overlay.style.display == 'block' || document.getElementsByClassName('popup-design')[0].style.display == 'block') {
			clearInterval(timeout);
		} else {
			overlay1.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
	}, 60000);

	close1.addEventListener('click', function () {
		overlay1.style.display = 'none';
		document.body.style.overflow = '';
	});
	window.addEventListener('click', function (event) {
		if (overlay1.style.display == 'block' && event.target == overlay1) {
			overlay1.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

	//BurgerMenuForTablets

	var burger = document.getElementsByClassName('burger-wrapper')[0],
	    burgerMenu = document.querySelector('.burger-menu');

	document.querySelector('.burger').style.display = 'none';

	if (document.documentElement.clientWidth <= 768) {
		document.querySelector('.burger').style.display = '';
		burger.addEventListener('touchstart', function (event) {
			if (burgerMenu.style.display == 'block') {
				burgerMenu.style.display = 'none';
			} else {
				burgerMenu.style.display = 'block';
			}
		});
	}
	window.addEventListener('resize', function () {
		if (document.documentElement.clientWidth > 768) {
			burgerMenu.style.display = 'none';
			burger.style.display = 'none';
		} else {
			burger.style.display = 'block';
		}
	});

	//GiftFromTheBottom

	var buttonCounter = 0,
	    buttonArr = document.getElementsByTagName('button');

	for (var i = 0; i < buttonArr.length; i++) {
		buttonArr[i].addEventListener('click', function () {
			buttonCounter++;
		});
	}

	window.addEventListener('scroll', function scroll() {
		if (buttonCounter == 0) {
			if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
				var _more = document.querySelector('.fixed-gift'),
				    _overlay = document.querySelector('.popup-gift'),
				    _close = document.querySelector('.popup-closed');
				_overlay.style.display = 'block';
				_more.style.display = 'none';
				document.body.style.overflow = 'hidden';
				_close.addEventListener('click', function () {
					_overlay.style.display = 'none';
					document.body.style.overflow = '';
				});
				window.addEventListener('click', function (event) {
					if (_overlay.style.display == 'block' && event.target == _overlay) {
						_overlay.style.display = 'none';
						document.body.style.overflow = '';
					}
				});
			}
		}

		if (overlay.style.display == 'block') {
			window.removeEventListener('scroll', scroll);
		}
	});

	//LowetSlider

	function lowerSlider() {
		var slideIndex = 1,
		    slides = document.getElementsByClassName('feedback-slider-item'),
		    prev = document.querySelector('.main-prev-btn'),
		    next = document.querySelector('.main-next-btn'),
		    wrap = document.querySelector('.feedback-slider');

		showSlides(slideIndex);

		function showSlides(n) {

			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}

			for (var _i3 = 0; _i3 < slides.length; _i3++) {
				slides[_i3].style.display = 'none';
			}
			slides[slideIndex - 1].style.display = 'block';
		}

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		prev.addEventListener('click', function () {
			plusSlides(-1);
			slides[slideIndex - 1].classList.add('animated', 'fadeInRight');
			document.getElementsByTagName('body')[0].style.cssText = 'overflow-x: hidden';
		});
		next.addEventListener('click', function () {
			plusSlides(1);
			slides[slideIndex - 1].classList.add('animated', 'fadeInLeft');
			document.getElementsByTagName('body')[0].style.cssText = 'overflow-x: hidden';
		});

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		var showLowerSlider = setInterval(function () {
			showSlides(slideIndex += 1);
		}, 7000);
	}
	lowerSlider();

	//Accordion

	var accordionTitle = document.querySelectorAll('.accordion-heading'),
	    accordionBlock = document.querySelectorAll('.accordion-block');

	var _loop4 = function _loop4(_i4) {
		accordionBlock[_i4].style.display = 'none';
		accordionTitle[_i4].addEventListener('click', function () {
			accordionTitle[_i4].classList.add('ui-accordion-header-active');
			accordionBlock[_i4].classList.add('slideInDown');
			if (accordionBlock[_i4].style.display == 'block') {
				accordionBlock[_i4].style.display = 'none';
				accordionTitle[_i4].classList.remove('ui-accordion-header-active');
				// accordionBlock[i].classList.remove('slideInDown');
				// accordionBlock[i].classList.add('slideInUp');
			} else {
				for (var a = 0; a < accordionBlock.length; a++) {
					accordionBlock[a].style.display = 'none';
					accordionTitle[a].classList.remove('ui-accordion-header-active');
				}
				accordionBlock[_i4].style.display = 'block';
				accordionTitle[_i4].classList.add('ui-accordion-header-active');
				// accordionBlock[i].classList.remove('slideOutUp');
				// accordionBlock[i].classList.add('slideInDown');
			}
			// if(accordionTitle[i].classList.contains('ui-accordion-header-active') && accordionBlock[i].style.display == ''){
			// 	// accordionBlock[i].classList.add('slideOutUp');
			// 	// accordionBlock[i].classList.remove('slideOutUp');
			// 	console.log(1)
			// } else {
			// 	// accordionBlock[i].classList.remove('slideOutUp');
			// 	// accordionBlock[i].classList.add('slideOutUp');
			// 	console.log(0)
			// }
		});
	};

	for (var _i4 = 0; _i4 < accordionTitle.length; _i4++) {
		_loop4(_i4);
	}

	//Calculator

	var totalValue = document.getElementsByClassName('calc-price')[0],
	    size = document.querySelector('#size'),
	    material = document.querySelector('#material'),
	    options = document.querySelector('#options'),
	    promo = document.querySelector('.promocode'),
	    sizeSum = 0,
	    materialSum = 0,
	    total = 0;

	totalValue.innerHTML = '0';

	function calc() {
		var a = total;
		a = a * this.value;
		totalValue.innerHTML = total;
	}

	size.addEventListener('change', function () {
		sizeSum = +this.value;
		total = sizeSum * materialSum;
		if (material.value == '0') {
			totalValue.innerHTML = '0';
		} else {
			calc.call(size);
		}
		promoCode();
	});

	material.addEventListener('change', function () {
		materialSum = +this.value;
		total = sizeSum * materialSum;
		if (size.value == '0') {
			totalValue.innerHTML = '0';
		} else {
			calc.call(material);
		}
		promoCode();
	});

	options.addEventListener('change', function () {
		total = sizeSum * materialSum;
		console.log(total);
		if (size.value == '' || material.value == '') {
			totalValue.innerHTML = '0';
		} else {
			var a = total;
			a = a * this.value;
			totalValue.innerHTML = a;
		}
		promoCode();
	});

	function promoCode() {
		if (promo.value == 'IWANTPOPART') {
			totalValue.innerHTML = totalValue.innerHTML * 0.7;
		}
	}

	promo.addEventListener('change', function () {
		promoCode();
	});

	// MascForTelInput
	function telMasc() {

		function setCursorPosition(pos, elem) {
			elem.focus();
			if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select();
			}
		}

		function mask(event) {
			var matrix = "+7 (___) ___ ____",
			    i = 0,
			    def = matrix.replace(/\D/g, ""),
			    val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function (a) {
				return (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
				);
			});
			if (event.type == "blur") {
				if (this.value.length == 2) this.value = "";
			} else setCursorPosition(this.value.length, this);
		};
		var input = document.querySelectorAll(".phone-input"); // Получает инпут
		for (var _i5 = 0; _i5 < input.length; _i5++) {
			input[_i5].addEventListener('focus', function () {
				this.value = "+7(___)___-____";
				this.setAttribute('placeholder', '');
			});
			input[_i5].addEventListener("input", mask, false);
			input[_i5].addEventListener("focus", mask, false);
			input[_i5].addEventListener("blur", mask, false);
		} // Создает ивент
	}
	telMasc();

	//RussianOnly
	function setValidator(id, regex) {
		var element = id;
		if (element) {
			var lastValue = element.value;
			if (!regex.test(lastValue)) lastValue = '';
			setInterval(function () {
				var value = element.value;
				if (value != lastValue) {
					if (regex.test(value)) lastValue = value;else element.value = lastValue;
				}
			}, 10);
		}
	}
	var textInput = document.querySelectorAll('.text-input');

	for (var _i6 = 0; _i6 < textInput.length; _i6++) {
		setValidator(textInput[_i6], /^[а-яА-я-]*$/);
	}

	// AJAX

	var message = {},
	    formArr = document.getElementsByClassName('main-form');

	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	var _loop5 = function _loop5(y) {
		var form = formArr[y],
		    input = form.getElementsByTagName('input'),
		    statusMessage = document.createElement('div');

		form.addEventListener('submit', function (event) {
			event.preventDefault();

			var formData = new FormData(form);

			var request = new XMLHttpRequest();

			request.open("POST", "");
			request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						// Добавляем контент на страницу
						if (form.classList.contains('main-form-lower')) {
							form.style.display = 'none';
							statusMessage.innerHTML = message.success;
							// statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
							statusMessage.style.cssText = 'text-align: center; margin-top: 15px; font-size: 30px;';
						} else {
							statusMessage.innerHTML = message.success;
							for (var a = 0; a < form.children.length; a++) {
								form.children[a].style.display = 'none';
							}
							form.appendChild(statusMessage);
						}
					} else {
						if (form.classList.contains('main-form-lower')) {
							form.style.display = 'none';
							statusMessage.innerHTML = '<img src="img/failed.png" alt="Failed">';
							statusMessage.innerHTML = message.failure;
							statusMessage.style.cssText = 'text-align: center; margin-top: 15px; font-size: 30px;';
						} else {
							statusMessage.innerHTML = message.failure;
							for (var _a = 0; _a < form.children.length; _a++) {
								form.children[_a].style.display = 'none';
							}
							form.appendChild(statusMessage);
						}
					}
				}
				setTimeout(function () {
					for (var _a2 = 0; _a2 < form.children.length; _a2++) {
						form.children[_a2].style.display = '';
					}
					statusMessage.style.display = 'none';
				}, 3000);
				function clearInput() {
					for (var _i7 = 0; _i7 < input.length; _i7++) {
						input[_i7].value = '';
						// Очищаем поля ввода
					}
				}
			};
			request.send(formData);
			clearInput();
		});
	};

	for (var y = 0; y < formArr.length; y++) {
		_loop5(y);
	}
});
