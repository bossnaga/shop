console.log("YOO")

var forms = document.querySelector('form');

forms.addEventListener('submit', function(e) {
	
	console.log("I've been submitted")

	var put = document.getElementsByTagName('input')[name='first-name'].value;
	console.log(put)

})