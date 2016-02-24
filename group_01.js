var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];


function calc(employee) {
	//start new array with employee name in position 0

	//assign variables to each piece of the array

	var empName = employee[0];
	var empNumber = employee[1];
	var empSalary = parseInt(employee[2]);
	var empRating = employee[3];

	var bonusPercent = 0;


//figure bonus
	switch(empRating) {
		case 1:
		bonusPercent = 0;
			break;

		case 2:
		bonusPercent = 0;
			break;

		case 3:
		bonusPercent = .04;
		//Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
			break;

		case 4:
		bonusPercent = .06;
		//Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
			break;

		case 5:
		bonusPercent = .1;
		//Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
			break;

		default:

			break;

	}

if (empNumber.length = 4) {
	bonusPercent += .05;
}

if (empSalary > 65000 && bonusPercent != 0) {
	bonusPercent -= .01;
}

if (bonusPercent > .13) {
	bonusPercent = .13;
}

var resBonus = Math.round(empSalary * bonusPercent);
var resAdjComp = (resBonus + empSalary);

	//newArray [name, sti, adjComp, total bonus]
var	newArray = [empName, bonusPercent, resAdjComp, resBonus];
return newArray;
	

}


for(var i=0; i < employees.length; i++) {
console.log(calc(employees[i]));

}






//function that loops through all employees calling function calc

