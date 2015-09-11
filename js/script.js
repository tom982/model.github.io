$(document).ready(function() {

	$('.test').hide();
	$('.btn-group button').click(function() {
		var target = "#" + $(this).data("target");
		$(".test").not(target).hide();
		$(target).fadeIn();
	});

});

function calculate() {
	var age = parseInt(document.getElementById('age').value);
	var tenure = parseInt(document.getElementById('tenure').value);
	var margin = parseInt(document.getElementById('margin').value);
	var residence = document.getElementById('residence').value;
	var distance = parseInt(document.getElementById('distance').value);
	var segment = document.getElementById('segment').value;
	var region = document.getElementById('region').value;
	var income = parseInt(document.getElementById('amount').value) / parseInt(document.getElementById('income').value);
	
	console.log(income);
	
	// Coefficients
	var c_Age = 0.7304;
	var c_Tenure = 0.7312;
	var c_Margin = 0.8784;
	var c_Residence = 0.4172;
	var c_Distance = 0.6832;
	var c_Segment = 1.2403;
	var c_Region = 0.2363;
	var c_Income = 0.9932;

	var intercept = 18.7789;
	var adjust = -3.2254;

	var adjustedIntercept = intercept + adjust;

	total = adjustedIntercept;

	// Age
	if (age <= 30) {
		total += -2.73406383042937 * c_Age;
	} else if (30 < age && age <= 33) {
		total += -3.17327269297707 * c_Age;
	} else if (33 < age && age <= 38) {
		total += -3.09516826107915 * c_Age;
	} else if (38 < age && age <= 45) {
		total += -3.5746586942724 * c_Age;
	} else if (45 < age && age <= 51) {
		total += -3.7030633572148 * c_Age;
	} else if (51 < age) {
		total += -3.8588276936612 * c_Age;
	} else {
		alert('Invalid age');
	}
	
	//Tenure
	if (tenure < 33) {
		total += -4.27826829726547 * c_Tenure;
	} else if (33 <= tenure && tenure < 36) {
		total += -3.71898658983301 * c_Tenure;
	} else if (36 <= tenure && tenure < 42) {
		total += -3.61090969645998 * c_Tenure;
	} else if (42 <= tenure && tenure < 45) {
		total += -3.22162491023833 * c_Tenure;
	} else if (45 <= tenure && tenure < 48) {
		total += -2.67653920562533 * c_Tenure;
	} else if (48 <= tenure) {
		total += -2.75594100719956 * c_Tenure;
	} else {
		alert('Invalid tenure');
	}

	// Margin
	if (margin < 0.1) {
		total += -2.56861233361244 * c_Margin;
	} else if (0.1 <= margin && margin < 0.15) {
		total += -2.89827301840003 * c_Margin;
	} else if (0.15 <= margin && margin < 0.2) {
		total += -2.79566280920081 * c_Margin;
	} else if (0.2 <= margin && margin < 0.25) {
		total += -3.16773833637392 * c_Margin;
	} else if (0.25 <= margin && margin < 0.35) {
		total += -3.15272601215324 * c_Margin;
	} else if (0.35 < margin) {
		total += -4.14567346485543 * c_Margin;
	} else {
		alert('Invalid margin');
	}

	// Residence
	if (residence == 'NA') {
		total += -3.36677871341688 * c_Residence;
	} else if (residence == 'OWN') {
		total += -3.17363573707625 * c_Residence;
	} else if (residence == 'RENTED') {
		total += -2.81086253105077 * c_Residence;
	} else if (residence == 'PARENTS') {
		total += -1.65295479776601 * c_Residence;
	} else {
		alert('Invalid residence');
	}

	// Distance
	if (0 < distance && distance <= 25) {
		total += -3.31043315039101 * c_Distance;
	} else if (25 < distance && distance <= 50) {
		total += -3.2876299879399 * c_Distance;
	} else if (50 < distance && distance <= 75) {
		total += -2.95005314156446 * c_Distance;
	} else if (75 < distance && distance <= 100) {
		total += -2.99573332355449 * c_Distance;
	} else if (100 < distance) {
		total += -2.38596779393359 * c_Distance;
	} else {
		total += -3.72741019224888 * c_Distance;
	}

	// Segment
	if (segment == 'Hatchback') {
		total += -3.608731522 * c_Segment;
	} else if (segment == 'MPV') {
		total += -3.200646153 * c_Segment;
	} else if (segment == 'MUV') {
		total += -2.78729487 * c_Segment;
	} else if (segment == 'SUV') {
		total += -2.48490665 * c_Segment;
	} else if (segment == 'Sedan') {
		total += -3.054394186 * c_Segment;
	} else {
		alert('Invalid segment');
	}

	// Region
	if (region == "AP1") {
		total += -3.263576004 * c_Region;
	} else if (region == "AP2") {
		total += -3.81220267 * c_Region;
	} else if (region == "Bihar") {
		total += -2.934521543 * c_Region;
	} else if (region == "CG1") {
		total += -4.635941845 * c_Region;
	} else if (region == "CG2") {
		total += -4.135166557 * c_Region;
	} else if (region == "Central1") {
		total += -3.719651113 * c_Region;
	} else if (region == "Central2") {
		total += -2.695471419 * c_Region;
	} else if (region == "Delhi NCR") {
		total += -3.171784217 * c_Region;
	} else if (region == "Gujarat") {
		total += -2.992154452 * c_Region;
	} else if (region == "Haryana & HP") {
		total += -3.385693195 * c_Region;
	} else if (region == "Jharkand") {
		total += -2.830759355 * c_Region;
	} else if (region == "Karnataka") {
		total += -2.00533357 * c_Region;
	} else if (region == "Kerala") {
		total += -2.95099638 * c_Region;
	} else if (region == "MH1") {
		total += -5.135798437 * c_Region;
	} else if (region == "MH2") {
		total += -2.679578527 * c_Region;
	} else if (region == "Orissa") {
		total += -3.372209845 * c_Region;
	} else if (region == "Punjab, HP & J&K") {
		total += -2.475604257 * c_Region;
	} else if (region == "Rajasthan 1") {
		total += -4.054679306 * c_Region;
	} else if (region == "Rajasthan 2") {
		total += -3.546739687 * c_Region;
	} else if (region == "TN1") {
		total += -2.257849199 * c_Region;
	} else if (region == "TN2") {
		total += -3.056356895 * c_Region;
	} else if (region == "Uttarpradesh") {
		total += 0.095 * c_Region;
	} else if (region == "Uttrakhand") {
		total += 0.0367892977 * c_Region;
	} else if (region == "WB &NE") {
		total += 0.0620347395 * c_Region;
	} else {
		alert('Invalid region');
	}
	
	console.log(total);
	// Salary
	if ($('#rad-sal').is(':checked')) {
		if (0 <= income && income < 0.25) {
			total += -5.1089711948 * c_Income;
		} else if (0.25 <= income && income < 0.3) {
			total += -4.718498871 * c_Income;
		} else if (0.3 <= income && income < 0.35) {
			total += -4.0488821881 * c_Income;
		} else if (0.35 <= income && income < 0.4) {
			total += -3.4011973817 * c_Income;
		} else if (0.4 <= income) {
			total += -2.5257286443 * c_Income;
		} else {
			alert('Invalid income');
		}
	} else if ($('#rad-sel').is(':checked')) {
		if (0 <= income && income < 1) {
			total += -4.7957905456 * c_Income;
		} else if (1 <= income && income < 1.5) {
			total += -4.0352234392 * c_Income;
		} else if (1.5 <= income && income < 2) {
			total += -3.7908518837 * c_Income;
		} else if (2 <= income && income < 2.5) {
			total += -3.3700506527 * c_Income;
		} else if (2.5 <= income && income < 3) {
			total += -2.9231615807 * c_Income;
		} else if (3 <= income && income < 3.5) {
			total += -2.5700644581 * c_Income;
		} else if (3.5 <= income) {
			total += -2.2380465719 * c_Income;
		} else {
			alert('Invalid income');
		}
	} else if ($('#rad-nip').is(':checked')) {
		total += -2.9436531245 * c_Income;
	}
	else {
		alert('No income type selected');
	}

	console.log('Final Total: ' + total);
	
	var cof = 0.0926;
	var rf = 0.155;
	var opex = 0.0396;
	var fee = 0.0097;
	var margin = 0.025;
	
	// Modal Variables
	var pd = 1 / (1 + Math.exp(-total));
	
	var mean = 483.9;
	var scaling = 72.3;
	var score = mean - total * scaling;
	
	var ncl = pd * 0.25;
	
	var irr = cof + opex + ncl + margin - fee;
	
	document.getElementById('pd').innerHTML = (pd * 100).toFixed(2) + '%';
	document.getElementById('score').innerHTML = Math.round(score);
	
	if (score >= 600) {
		document.getElementById('decision').className = 'alert alert-success';
		document.getElementById('decision-icon').className = 'glyphicon glyphicon-ok'
		document.getElementById('decision-text').innerHTML = 'Approved';
	} else {
		document.getElementById('decision').className = 'alert alert-danger';
		document.getElementById('decision-icon').className = 'glyphicon glyphicon-remove';
		document.getElementById('decision-text').innerHTML = 'Rejected';
	}
	
	document.getElementById('ncl').innerHTML = (ncl * 100).toFixed(2) + '%';
	document.getElementById('irr').innerHTML = (irr * 100).toFixed(2) + '%';
	

	$('#exampleModal').modal('show');

}
