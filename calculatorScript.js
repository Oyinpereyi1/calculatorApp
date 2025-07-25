
// variables to store and set input
let input = document.getElementById("box1");
let buttons = document.querySelectorAll("button");
let string = "";

// an array of all the buttons
let array1 = Array.from(buttons);
array1.forEach(button => {
	
	// event carried out by the button
	button.addEventListener('click', (e) => {
		if(e.target.innerHTML == "=") {
			string = eval(string);
			input.value = string;
		}
		else if(e.target.innerHTML == "Clear"){
			// displays amn empty string to the input
			string = "";
			input.value = string;
		}
		else{
			string += e.target.innerHTML;
			input.value = string;
		}
	})
})