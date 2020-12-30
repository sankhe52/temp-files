var string = "Hello";
console.log(string.length);


const form = document.getElementById("form");
const fname = document.getElementById("first_name");
const lname = document.getElementById("last_name");
const monum = document.getElementById("mobile_number");
const address = document.getElementById("address_field");
const email = document.getElementById("email_id");
const pass = document.getElementById("password_field");
const cpass = document.getElementById("cpname");
const error = document.getElementById("error-text");
const btn = document.getElementById("signin_btn");


	
btn.addEventListener("click", e => {
	e.preventDefault();
	validate();
});
function validate() {
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const monumValue = monum.value;
	const addressValue = address.value.trim();
	const emailValue = email.value.trim();
	const passValue  = pass.value;
	const cpassValue = cpass.value;

	if(fnameValue == '') {
		setError(fname);
	}
	if(lnameValue === '') {
		setError(lname);
	}
	if(monumValue === '') {
		setError(monum);
	}
	if(addressValue === '') {
		console.log("okay")
		setError(address);
	}
	if(emailValue === '') {
		setError(email);
	}
	if(passValue === '') {
		setError(pass);
		setError(cpass);
	}	

}

fname.addEventListener("blur", function(){
	if(fname.value.length > 2) {
		setSucess(fname);
	}
});
lname.addEventListener("blur", function(){
	if(lname.value.length > 2) {
		setSucess(lname);
	}
});
monum.addEventListener("blur", function(){
	if(monum.value.length > 9) {
		setSucess(monum);
	}
});
email.addEventListener("blur", function(){
	if(email.value.search("@") != -1 && email.value.search(".") != -1) {
		setSucess(email);
	}
});
address.addEventListener("blur", function(){
	if(address.value.length > 10) {
		setSucess(address);
	}
});
pass.addEventListener("blur", function(){
	if(pass.value.length > 2) {
		setSucess(pass);
	}
});

cpass.addEventListener("blur", function(){
	if((pass.value == cpass.value) && pass.value.length > 2) {
		setSucess(cpass);
	}
	else {
		error.innerHTML = "Passwords Do not match";
		setError(cpass);
	}
});

function setError(input) {
	input.className = "field error";
}
function setSucess(input) {
	input.className = "field sucess";
}
