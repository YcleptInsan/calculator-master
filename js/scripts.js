
//defining variables to preform math
 var add = function(number1, number2){
 	return number1 + number2;
 };



 var subtract = function(number1, number2){
 	return number1 - number2;
 };


var multiply = function(number1, number2){
	return number1 * number2;
};



var divide = function(number1, number2){
	return number1 / number2;
};



// starting UI Logic here
var numEnter = "";
var setNum = 0;
var operator = "";

$(document).ready(function() {
	$("#button-seven").click(function (){
		numEnter = numEnter + "7";
		$("#display").text(numEnter);
	});
});

$(document).ready(function() {
	$("#button-eight").click(function (){
		numEnter = numEnter + "8";
		$("#display").text(numEnter);
	});
});

$(document).ready(function() {
	$("#button-nine").click(function (){
		numEnter = numEnter + "9";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-divide").click(function (){
		setNum = parseInt(numEnter);
		$("#display").text("");
		operator = "divide";
		numEnter = "";
	});
});
$(document).ready(function() {
	$("#button-four").click(function (){
		numEnter = numEnter + "4";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-five").click(function (){
		numEnter = numEnter + "5";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-six").click(function (){
		numEnter = numEnter + "6";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-multiply").click(function (){
		setNum = parseInt(numEnter);
		$("#display").text("");
		operator = "multiply";
		numEnter = "";
	});
});
$(document).ready(function() {
	$("#button-one").click(function (){
		numEnter = numEnter + "1";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-two").click(function (){
		numEnter = numEnter + "2";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-three").click(function (){
		numEnter = numEnter + "3";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-subtract").click(function (){
		setNum = parseInt(numEnter);
		$("#display").text("");
		operator = "subtract"
		numEnter = "";
	});
});

$(document).ready(function() {
	$("#button-add-subtract").click(function (){
		numEnter = numEnter + "+/-";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-zero").click(function (){
		numEnter = numEnter + "0";
		$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-decimal").click(function (){
		numEnter = numEnter + ".";
	 	$("#display").text(numEnter);
	});
});
$(document).ready(function() {
	$("#button-add").click(function (){
		setNum = parseInt(numEnter);
		$("#display").text("");
		operator = "add";
		numEnter = "";
	});
});

$(document).ready(function() {
	$("#button-equals").click(function (){
		if (operator === "add") {
			numEnter = add(setNum, parseInt(numEnter) );
			$("#display").text(numEnter);
		};
		if (operator === "subtract") {
			numEnter = subtract(setNum, parseInt(numEnter) );
			$("#display").text(numEnter);
		};
		if (operator === "multiply") {
			numEnter = multiply(setNum, parseInt(numEnter) );
			$("#display").text(numEnter);
		};
		if (operator === "divide") {
			numEnter = divide(setNum, parseInt(numEnter) );
			$("#display").text(numEnter);
		};
	});
});


//back end
