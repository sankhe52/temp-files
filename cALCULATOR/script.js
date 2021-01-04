var inputs = document.querySelector('.input');
var outputs = document.querySelector('.output');
var point = document.querySelector('#dot');
var equals = document.querySelector('#equals');
var flag = 0;
function printinput(jo) {
	if (jo == '') {
		inputs.innerHTML = ''
	}
	else {
	if (flag == 0) {
		inputs.innerHTML = inputs.innerHTML + jo;
	}
	else{
		inputs.innerHTML = outputs.innerHTML + jo;
		printOutputs('');
		flag = 0;
}
}
}
function printOutputs(jo) {
	if (jo == '') {
		outputs.innerHTML = ''
	}
}
function solver(){
	outputs.innerHTML = '';
	temp = inputs.innerHTML;
	outputs.innerHTML = eval(temp);
	flag = 1;

}
var numbers = document.getElementsByClassName("nums");
for (var i = 0; i<numbers.length;i++) {
	numbers[i].addEventListener("click", function() {
		if (outputs.innerHTML == '') {
			printinput(this.innerHTML);
		}
		else {
			outputs.innerHTML = '';
			printinput(this.innerHTML);
		}
		
	})
}
var operators = document.getElementsByClassName("operator");
for (var i = 0; i<operators.length; i++) {
	operators[i].addEventListener("click", function() {
		var charCheck = inputs.innerHTML.charAt(inputs.innerHTML.length-1);
		if (charCheck != '*' && charCheck != '+' && charCheck != '-' && charCheck != '/') {
			printinput(this.innerHTML);
		}
		else {
			inputs.innerHTML = inputs.innerHTML.substr(0, inputs.innerHTML.length-1)
			printinput(this.innerHTML);
		}
	})
}
var actions = document.getElementsByClassName('action');
for (var i = 0; i<actions.length; i++) {
	actions[i].addEventListener('click', function(){
		console.log(this.innerHTML);
		if (this.innerHTML == "C") {
			inputs.innerHTML = inputs.innerHTML.substr(0, inputs.innerHTML.length-1);
			console.log(this.innerHTML);
		}
		else if(this.innerHTML == "="){
			solver();
			console.log(this.innerHTML);
		}
		else if(this.innerHTML == "AC"){
			printinput("");
			printOutputs('');
			console.log(this.innerHTML);
		}
		else if(this.innerHTML === "1/x"){

			console.log("Okay");
			outputs.innerHTML == inputs.innerHTML.parseInt(inputs.innerHTML, 10);
		}
	})
}