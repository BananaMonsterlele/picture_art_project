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
}


module.exports = Calculator;