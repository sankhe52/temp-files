function mechprop() {
	if(document.getElementById('q1').selected) {


		document.getElementById('propunits').innerHTML =
		`<p class="inputs"><label>Convert</label>
				<div class="make_center">
					<input type="number"  onchange="formula_dist(this.value)" oninput="formula_dist(this.value)">
					<select class="dropdwns">
						<option id>Unit1</option>
						<option id="u11">Pa</option>
						<option id="u12">Mpa</option>
						<option id="u13">Gpa</option>
					</select>
				</div></p>
				<p class="inputs"><label>To</label><br>
				<div class="make_center">
					<input type="number" id="target_box">
					<select class="dropdwns">
						<option>Unit2</option>
						<option id="u21">Pa</option>
						<option id="u22">Mpa</option>
						<option id="u23">Gpa</option>
					</select>
					<br>
					<input type="reset" value="Reset Fields">
				</div>`;
		

	}
	else if (document.getElementById('q2').selected) {
		document.getElementById('propunits').innerHTML =
		`<p class="inputs"><label>Convert</label><br>
				<div class="make_center">
					<input type="number"  onchange="formula_dist(this.value)" oninput="formula_dist(this.value)">
					<select class="dropdwns">
						<option id>Unit1</option>
						<option id="u11">RPM</option>
						<option id="u12">rad/s</option>
						<option id="u13">rad/hr</option>
					</select>
				</div></p>
				<p class="inputs"><label>To</label><br>
				<div class="make_center">
					<input type="number" id="target_box">
					<select class="dropdwns">
						<option>Unit2</option>
						<option id="u21">RPM</option>
						<option id="u22">rad/s</option>
						<option id="u23">rad/hr</option>
					</select>
					<br>
					<input type="reset" value="Reset Fields">
				</div></p>`;
				
	}
	else if (document.getElementById('q3').selected) {
		document.getElementById('propunits').innerHTML =
		`<p class="inputs"><label>Convert</label><br>
				<div class="make_center">
					<input type="number"  onchange="formula_dist(this.value)" oninput="formula_dist(this.value)">
					<select class="dropdwns">
						<option id>Unit1</option>
						<option id="u11">Ns/m<sup>2</sup></option>
						<option id="u12">Poise</option>
						<option id="u13">kgf-sec/m2</option>
					</select>
				</div></p>
				<p class="inputs"><label>To</label><br>
				<div class="make_center">
					<input type="number" id="target_box">
					<select class="dropdwns">
						<option>Unit2</option>
						<option id="u21">Ns/m<sup>2</sup></option>
						<option id="u22">Poise</option>
						<option id="u23">kgf-sec/m2</option>
					</select>
					<br>
					<input type="reset" value="Reset Fields">
				</div>`;
				
	}
	else if (document.getElementById('q4').selected) {
		document.getElementById('propunits').innerHTML =
		`<p class="inputs"><label>Convert</label><br>
				<div class="make_center">
					<input type="number"  onchange="formula_dist(this.value)" oninput="formula_dist(this.value)">
					<select class="dropdwns">
						<option id>Unit1</option>
						<option id="u11">atm</option>
						<option id="u12">bar</option>
						<option id="u13">mmHg</option>
					</select>
				</div></p>
				<p class="inputs"><label>To</label><br>
				<div class="make_center">
					<input type="number" id="target_box">
					<select class="dropdwns">
						<option>Unit2</option>
						<option id="u21">atm</option>
						<option id="u22">bar</option>
						<option id="u23">mmHg</option>
					</select>
					<br>
					<input type="reset" value="Reset Fields">
				</div>`;
				
	}
	else if (document.getElementById('q5').selected) {
		document.getElementById('propunits').innerHTML =
		`<p class="inputs"><label>Convert</label><br>
				<div class="make_center">
					<input type="number"  onchange="formula_dist(this.value)" oninput="formula_dist(this.value)">
					<select class="dropdwns">
						<option id>Unit1</option>
						<option id="u11">Izod</option>
						<option id="u12">Charpy</option>
					</select>
				</div></p>
				<p class="inputs"><label>To</label><br>
				<div class="make_center">
					<input type="number" id="target_box">
					<select class="dropdwns">
						<option>Unit2</option>
						<option id="u21">Izod</option>
						<option id="u22">Charpy</option>
					</select>
					<br>
					<input type="reset" value="Reset Fields">
				</div>`;
				
	}
	else {
		document.getElementById('propunits').innerHTML = "";
	}
}
function formula_dist(num) {
	if(document.getElementById('q1').selected) {
		if((document.getElementById('u11').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num*(10**(-6));
		}
		else if((document.getElementById('u11').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num*(10**(-9));
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num*(10**6);
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num*(10**(-3));
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num*(10**(9));
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num*(10**(3));
		}
		
	}

	else if(document.getElementById('q2').selected) {
		if((document.getElementById('u11').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num*((2*3.14)/60);
		}
		else if((document.getElementById('u11').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num*(120*3.14);
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num*(60/(2*3.14));
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num*(3600);
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num/(120*3.14);
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num/3600;
		}
		
	}
	else if(document.getElementById('q3').selected) {
		if((document.getElementById('u11').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num*10;
		}
		else if((document.getElementById('u11').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num/9.80665;
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num/10;
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num/98.0665;
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num*9.80665;
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num*98.0665;
		}
		
	}
	else if(document.getElementById('q4').selected) {
		if((document.getElementById('u11').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num*1.01325;
		}
		else if((document.getElementById('u11').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = numk*760;
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = numa/1.01325;
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u23').selected)) {
			document.getElementById("target_box").value = num*750.062;
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num/760;
		}
		else if((document.getElementById('u13').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num**133.322368;
		}
		
	}
	else if(document.getElementById('q5').selected) {
		if((document.getElementById('u11').selected) && (document.getElementById('u22').selected)) {
			document.getElementById("target_box").value = num/2.738223;
		}
		else if((document.getElementById('u12').selected) && (document.getElementById('u21').selected)) {
			document.getElementById("target_box").value = num*2.738223;
		}
		
	}
	

}
