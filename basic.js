/*
	Objective: Create a Basic Four Function Calculator
	Developer: Adam Wexler
	Date: 12/29/2015
	Language: Javascript
*/

var readline = require('readline');
var addition = require("./addition.js");
var subtraction = require("./subtraction.js");
var multiplication = require("./multiplication.js");
var division = require("./division.js");

var read = readline.createInterface(process.stdin, process.stdout);

function errorMessage(){
	console.log("Symbol Doesn't Exist");
}

function parseInteger(result){
	var parseResult = result.toString().split(" ");

	for (i = 0; i <= parseResult.length; i++) { 
    	if(parseResult[i+1] == "+"){
    		return addition.addition(parseResult[i], parseResult[i+2]);
    	}

    	else if(parseResult[i+1] == "-"){
    		return subtraction.subtraction(parseResult[i], parseResult[i+2]);
    	}

    	else if(parseResult[i+1] == "/"){
    		return division.division(parseResult[i], parseResult[i+2]);
    	}

    	else if(parseResult[i+1] == "*" || parseResult[i+1] == "x"){
    		return multiplication.multiplication(parseResult[i], parseResult[i+2]);
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

exports.calculator = function(){
	var choice;
	var answer;
	console.log("Welcome to the Basic Four-Function Calculator.\n Type: 'help' to Learn About the Possible Options. ");
	
	command();

}