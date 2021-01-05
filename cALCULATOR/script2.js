var inputs = document.getElementById('inputs');
var outputs = document.getElementById('outputs');
var numbers = document.getElementsByClassName('num-js');
var action = document.getElementsByClassName('action-js');
var operator = document.getElementsByClassName('operator-js');
var equals = document.getElementById('=')
var flag = 0;

for (let i = 0; i<numbers.length; i++) {
	//looping over number buttons for click events

	numbers[i].addEventListener("click", function() {
		if (flag == 0) {
		
			inputs.innerHTML += this.id;
	
		}
		else {
			outputs.innerHTML = '';
			inputs.innerHTML = this.id;
			flag = 0;
		}
	});
}

for (let i = 0; i<operator.length; i++) {
	//looping over operator buttons for click events

	operator[i].addEventListener("click", function() {
		const lastChar = inputs.innerHTML.charAt(inputs.innerHTML.length - 1);
		if (inputs.innerHTML != '') {	
			if (lastChar != '*' && lastChar != '+' && lastChar != '/' && 
				lastChar != '-' && lastChar != '%' && lastChar != '(' && lastChar != ')') {
				if (flag == 0) {
					inputs.innerHTML += this.id;
				}
				else {
						
						inputs.innerHTML = outputs.innerHTML + this.id;
						outputs.innerHTML = '';
						flag = 0;
						
				}
			}
			else {
				inputs.innerHTML = inputs.innerHTML.substr(0, inputs.innerHTML.length - 1);
				inputs.innerHTML += this.id;
			}
		}
	});
}

for (let i = 0;i<action.length; i++) {
	//looping over action buttons
	action[i].addEventListener('click', function() {
		if (inputs.innerHTML != '') {
			switch (this.id) {
				case "allclear" :
					inputs.innerHTML = '';
					outputs.innerHTML = '';
					break;
				case "square":
					if (inputs.innerHTML != '' && outputs.innerHTML == '') {
						outputs.innerHTML = eval(inputs.innerHTML + '*' + inputs.innerHTML);
						inputs.innerHTML = "(" + inputs.innerHTML + ")<sup>2</sup>";
						flag = 1;
					}
					else {
						inputs.innerHTML = "(" + outputs.innerHTML + ")<sup>2</sup>";
						outputs.innerHTML = eval(outputs.innerHTML + '*' + outputs.innerHTML);
					}
					break;
				case "third":
					if (inputs.innerHTML != '' && outputs.innerHTML == '') {
						outputs.innerHTML = eval(inputs.innerHTML + '*' + inputs.innerHTML + '*' + inputs.innerHTML);
						inputs.innerHTML = "(" + inputs.innerHTML + ")<sup>3</sup>";
						flag = 1;
					}
					else {
						inputs.innerHTML = "(" + outputs.innerHTML + ")<sup>3</sup>";
						outputs.innerHTML = eval(outputs.innerHTML + '*' + outputs.innerHTML + '*' + outputs.innerHTML);
					}
					break;
				case "clear" :
						inputs.innerHTML = inputs.innerHTML.substr(0, inputs.innerHTML.length - 1);
						if (inputs.innerHTML == '') {
							outputs.innerHTML = '';
						}
					break;
			}
		}
	})
}
//equals button
equals.addEventListener('click', function() {
	outputs.innerHTML = eval(inputs.innerHTML);
	flag = 1;
});
