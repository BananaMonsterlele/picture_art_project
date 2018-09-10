function ShowMoreContent () {
	let moreContent = document.querySelector('.button-styles'),
		moreBlocks = document.querySelectorAll('.styles-2');
	

	moreContent.addEventListener('click', function(){
		for(let i = 0; i < moreBlocks.length; i++){
			moreBlocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			moreBlocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		}
		this.style.display = `none`;
	})
}


module.exports = ShowMoreContent;