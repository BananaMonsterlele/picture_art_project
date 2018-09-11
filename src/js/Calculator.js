function Calculator () {
		// let totalValue = document.getElementsByClassName('calc-price')[0],
		// 	size = document.querySelector('#size'),
		// 	material = document.querySelector('#material'),
		// 	options = document.querySelector('#options'),
		// 	promo = document.querySelector('.promocode'),
		// 	sizeSum = 0,
		// 	materialSum = 0,
		// 	total = 0;

		// totalValue.innerHTML = '0';

		// function calc () {
		// 	this.Sum = +this.value;
		// 	total =  +this.Sum;
		// 	// if(material.value == '0'){
		// 	// 	totalValue.innerHTML = '0';
		// 	// 	console.log(11111)ж
		// 	// } else {
		// 		let a = total;
		// 		a = a * this.value;
		// 		totalValue.innerHTML = total;	
		// 	// }
		// 	promoCode();
			
		// }
		
		// size.addEventListener('change', function(){
		// 	calc.call(size);
		// 	if(material.value == '0'){
		// 		totalValue.innerHTML = '0';
		// 	}
	 // 	});

		// material.addEventListener('change', function(){
		// 	calc.call(material);
		// 	if(size.value == '0'){
		// 		totalValue.innerHTML = '0';
		// 	}
		// });	

		// options.addEventListener('change', function(){
		// 	// total =  sizeSum * materialSum;
		// 	if(size.value == 0 || material.value == 0){
		// 		totalValue.innerHTML = '0';
		// 		alert('Сначала выберете размер и материал и заново выберете доп услугу');
		// 		this.value = '' ;
		// 	} else {
		// 		let a = total;
		// 		a = a * this.value;
		// 		totalValue.innerHTML = a;	
		// 	}
		// 	promoCode();
		// });

		// function promoCode() {
		// 	if(promo.value == 'IWANTPOPART'){
		// 		totalValue.innerHTML = totalValue.innerHTML * 0.7;
		// 	}
		// }

		// promo.addEventListener('change', ()=>{
		// 	promoCode();
		// })

		let calcWrapper = document.querySelector('.form-calc'),
			total = 0,
			size = document.querySelector('#size'),
			material = document.querySelector('#material'),
			options = document.querySelector('#options'),
			promo = document.querySelector('.promocode'),
			sizeValue = 0,
			materialValue = 0,
			optionsValue = 1,
			totalValue = document.getElementsByClassName('calc-price')[0];

		calcWrapper.addEventListener('change', function(event){
			if(event.target.classList.contains('size')){
				
				// if(Number(material.value) === 0){
				// 	sizeValue = +size.value;
				// 	totalValue.innerHTML = '0';

				// } else {
					sizeValue = +size.value;
				// }
			}
			if(Number(material.value) == 0 || Number(size.value) == 0){
				totalValue.innerHTML = '0';
			}
			if(event.target.classList.contains('material')){
				
				// if(Number(size.value) === 0){
				// 	materialValue = +material.value;
				// 	totalValue.innerHTML = '0'
				// } else {
					materialValue = +material.value;
				// }
			}
			if(event.target.classList.contains('options')){
				optionsValue = +options.value;
			} 
			total = (sizeValue + materialValue) * optionsValue;
			totalValue.innerHTML = total;
			if(material.value == '0' || size.value == '0'){
				totalValue.innerHTML = '0'
			} 
			if(promo.value == 'IWANTPOPART'){
				total = total * 0.7 
			}
			
		})	
}


module.exports = Calculator;