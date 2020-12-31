var fields = {
	"fname" : document.getElementById("first_name"),
	"lname" : document.getElementById("last_name"),
	"monum" : document.getElementById("mobile_number"),
	"address" : document.getElementById("address_field"),
	"email" : document.getElementById("email_id"),
	"pass" : document.getElementById("password_field"),
	"cpass" : document.getElementById("cpname"),
}
const error = document.getElementById("error-text");
const btn = document.getElementById("signin_btn");
	
btn.addEventListener("click", e => {
	e.preventDefault();
	checkBlanks();
});
function checkBlanks() {
	console.log("Okay");
	for (var field in fields) {
		if(fields[field].value === '')
		{
			setError(fields[field]);
		}
	}
}

(function checkInputs() {
	fields["fname"].addEventListener("blur", function(){
		if(fields["fname"].value.length > 2) {
			setSucess(fields["fname"]);
		}
	});
	fields["lname"].addEventListener("blur", function(){
		if(fields["lname"].value.length > 2) {
			setSucess(fields["lname"]);
		}
	});
	fields["monum"].addEventListener("blur", function(){
		if(fields["monum"].value.length > 9) {
			setSucess(fields["monum"]);
		}
	});
	fields["email"].addEventListener("blur", function(){
		if(fields["email"].value.search("@") != -1 && fields["email"].value.search(".") != -1) {
			setSucess(fields["email"]);
		}
	});
	fields["address"].addEventListener("blur", function(){
		if(fields["address"].value.length > 10) {
			setSucess(fields["address"]);
		}
	});
	fields["pass"].addEventListener("blur", function(){
		if(fields["pass"].value.length > 2) {
			setSucess(fields["pass"]);
		}
	});
	
	fields["cpass"].addEventListener("blur", function() {
		if((fields["pass"].value == fields["cpass"].value)) {
			if (fields["cpass"].value != '') {
			setSucess(fields["cpass"]);
			}
		}
		else {
			error.innerHTML = "Passwords do not match";
			setError(cpass);
		}
	});
}());

function setError(input) {
	input.className = "field error";
}
function setSucess(input) {
	input.className = "field sucess";
}
