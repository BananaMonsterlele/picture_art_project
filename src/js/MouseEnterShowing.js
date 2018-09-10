function MouseEnterShowing () {
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
}


module.exports = MouseEnterShowing;