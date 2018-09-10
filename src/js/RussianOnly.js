function RussianOnly () {
	function setValidator(id, regex) {
	  let element = id;
	  if (element) {
	    let lastValue = element.value;
	    if (!regex.test(lastValue))
	      lastValue = '';
	    setInterval(function() {
	      let value = element.value;
	      if (value != lastValue) {
	        if (regex.test(value))
	          lastValue = value;
	        else
	          element.value = lastValue;
	      }
	    }, 10);
	  }
	}
	let textInput = document.querySelectorAll('.text-input');
	
	for(let i = 0; i < textInput.length; i++ ){
		setValidator(textInput[i], /^[а-яА-я-]*$/)
	}

}


module.exports = RussianOnly;