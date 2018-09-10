function Tabs () {
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
				for(let i = 0; i < portfolioBtn.length; i++){
					portfolioBtn[i].classList.remove('active');
				}
				event.target.classList.add('active');
			}
		}
		
	})
}


module.exports = Tabs;