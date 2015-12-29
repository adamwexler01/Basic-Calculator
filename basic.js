/*
	Objective: Create a Basic Four Function Calculator
	Developer: Adam Wexler
	Date: 12/29/2015
	Language: Javascript
*/

var readline = require('readline');

var read = readline.createInterface(process.stdin, process.stdout);

function division(dividend, divisor){
	return dividend / divisor;
}

function multiplication(multiplicand, muliplier){
	return multiplicand * muliplier;
}

function subtraction(operand1, operand2){
	return operand1 - operand2;
}

function addition(operand1, operand2){
	return operand1 + operand2;
}

function parseInt(result){
	console.log(result);
}

function helpOption(){
	console.log("\n These Are the Operations of Choice: \n Addition \n Subtraction \n Multiplication \n Division");
}

function exit(){
	console.log("Exiting");
	read.close();
}

function command(){

  read.question('Expression: ', function (answer) {
    if (answer.toLowerCase() == "exit"){
    	//Exits the application
    	return exit();
    } if (answer.toLowerCase() == "help"){
    	//Helps the User Explain the Features of Calculator
    	helpOption();
    } else{
    	//Parse String Value to Integer and Character Value


    }

	command();

  });

}

function calculator(){
	var choice;
	var answer;
	console.log("Welcome to the Basic Four-Function Calculator.\n Type: 'help' to Learn About the Possible Options. ");
	
	command();

}


calculator();