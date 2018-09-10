function Calculator () {
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
			this.Sum = +this.value;
			total =  +this.Sum;
			// if(material.value == '0'){
			// 	totalValue.innerHTML = '0';
			// 	console.log(11111)ж
			// } else {
				let a = total;
				a = a * this.value;
				totalValue.innerHTML = total;	
			// }
			promoCode();
			
		}
		
		size.addEventListener('change', function(){
			calc.call(size);
			if(material.value == '0'){
				totalValue.innerHTML = '0';
			}
	 	});

		material.addEventListener('change', function(){
			calc.call(material);
			if(size.value == '0'){
				totalValue.innerHTML = '0';
			}
		});	

		options.addEventListener('change', function(){
			// total =  sizeSum * materialSum;
			if(size.value == 0 || material.value == 0){
				totalValue.innerHTML = '0';
				alert('Сначала выберете размер и материал и заново выберете доп услугу');
				this.value = '' ;
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
}


module.exports = Calculator;