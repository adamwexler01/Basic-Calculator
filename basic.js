/*
	Objective: Create a Basic Four Function Calculator
	Developer: Adam Wexler
	Date: 12/29/2015
	Language: Javascript
*/

var readline = require('readline');

var read = readline.createInterface(process.stdin, process.stdout);

function errorMessage(){
	console.log("Symbol Doesn't Exist");
}

function division(dividend, divisor){
	var result = dividend / divisor
	console.log(result);
}

function multiplication(multiplicand, muliplier){
	var result = multiplicand * muliplier;
	console.log(result);
}

function subtraction(operand1, operand2){
	var result =  operand1 - operand2;
	console.log(result);
}

function addition(operand1, operand2){
	var result =  parseInt(operand1) + parseInt(operand2);
	console.log(result);
}

function parseInteger(result){
	var parseResult = result.toString().split(" ");

	for (i = 0; i <= parseResult.length; i++) { 
    	if(parseResult[i+1] == "+"){
    		return addition(parseResult[i], parseResult[i+2]);
    	}

    	else if(parseResult[i+1] == "-"){
    		return subtraction(parseResult[i], parseResult[i+2]);
    	}

    	else if(parseResult[i+1] == "/"){
    		return division(parseResult[i], parseResult[i+2]);
    	}

    	else if(parseResult[i+1] == "*" || parseResult[i+1] == "x"){
    		return multiplication(parseResult[i], parseResult[i+2]);
    	}

    	else{
    		errorMessage();
    	}
	}
}

function helpOption(){
	console.log("\n These Are the Operations of Choice: \n Addition \n Subtraction \n Multiplication \n Division");
}

function exit(){
	console.log("Exiting");
	read.close();
}

function command(){

  read.question('> ', function (answer) {
    if (answer.toLowerCase() == "exit"){
    	//Exits the application
    	return exit();
    } if (answer.toLowerCase() == "help"){
    	//Helps the User Explain the Features of Calculator
    	helpOption();
    } else{
    	//Parse String Value to Integer and Character Value
    	parseInteger(answer);

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