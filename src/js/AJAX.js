function AJAX () {
	let message = {},
		formArr = document.getElementsByClassName('main-form');

	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';



	for(let y = 0; y < formArr.length; y++){
		let	form = formArr[y],
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

		form.addEventListener('submit', function(event){
			event.preventDefault();


			let formData = new FormData(form);

					let request = new XMLHttpRequest();

					request.open("POST", "");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

					request.onreadystatechange = function(){
						if (request.readyState < 4){
							statusMessage.innerHTML = message.loading
						} else if(request.readyState === 4){
							if(request.status == 200 && request.status < 300){
								// Добавляем контент на страницу
								if(form.classList.contains('main-form-lower')){
									form.style.display = 'none';
									statusMessage.innerHTML = message.success;
									// statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
									statusMessage.style.cssText = 'text-align: center; margin-top: 15px; font-size: 30px;';
								} else {
									statusMessage.innerHTML = message.success;
									for(let a = 0; a < form.children.length; a++){
										form.children[a].style.display = 'none';
									}
									form.appendChild(statusMessage);
								}
								
							}
							else {
								if(form.classList.contains('main-form-lower')){
									form.style.display = 'none';
									statusMessage.innerHTML = '<img src="img/failed.png" alt="Failed">';
									statusMessage.innerHTML = message.failure;
									statusMessage.style.cssText = 'text-align: center; margin-top: 15px; font-size: 30px;';
								} else {
									statusMessage.innerHTML = message.failure;
									for(let a = 0; a < form.children.length; a++){
										form.children[a].style.display = 'none';
									}
									form.appendChild(statusMessage);
								}
							}
						}
						setTimeout(function(){
							for(let a = 0; a < form.children.length; a++){
								form.children[a].style.display = '';
							}
							statusMessage.style.display = 'none'
						}, 3000);
						function clearInput(){
							for(let i = 0; i < input.length; i++){
								input[i].value = '';
								// Очищаем поля ввода
							}
						}
						clearInput();
					};
					request.send(formData);
					

			

		});	
	}	
}

module.exports = AJAX;