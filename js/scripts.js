// var add = function(number1, number2){
// 	return number1 + number2;
// };
//
//
//
// var subtract = function(number1, number2){
// 	return number1 - number2;
// };
//
//
// var multiply = function(number1, number2){
// 	return number1 * number2;
// };
//
//
//
// var divide = function(number1, number2){
// 	return number1 / number2;
// };
//
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);
//
// alert()
var numEnter = "";

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
		numEnter = numEnter + "/";
		$("#display").text(numEnter);
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
		numEnter = numEnter + "*";
		$("#display").text(numEnter);
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
	$("#button-minus").click(function (){
		numEnter = numEnter + "-";
		$("#display").text(numEnter);
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
		numEnter = numEnter + "+";
		$("#display").text(numEnter);
	});
});
