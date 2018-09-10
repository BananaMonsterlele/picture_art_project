function Accordion () {
	let accordionTitle = document.querySelectorAll('.accordion-heading'),
		accordionBlock = document.querySelectorAll('.accordion-block');


	for(let i = 0; i < accordionTitle.length; i++){
		accordionBlock[i].style.display = 'none';
		accordionTitle[i].addEventListener('click', function() {
			accordionTitle[i].classList.add('ui-accordion-header-active');
			accordionBlock[i].classList.add('slideInDown');
			if(accordionBlock[i].style.display == 'block'){
				accordionBlock[i].style.display = 'none';
				accordionTitle[i].classList.remove('ui-accordion-header-active');
				// accordionBlock[i].classList.remove('slideInDown');
				// accordionBlock[i].classList.add('slideInUp');
			} else {
				for(let a = 0; a < accordionBlock.length; a++){
					accordionBlock[a].style.display = 'none';
					accordionTitle[a].classList.remove('ui-accordion-header-active');
				}
				accordionBlock[i].style.display = 'block';
				accordionTitle[i].classList.add('ui-accordion-header-active');
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
		})
	}	
}

module.exports = Accordion;