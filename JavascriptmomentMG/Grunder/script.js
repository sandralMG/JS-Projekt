/* Uppgift 1*****/

/*var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);*/


/* Uppgift 2*****/
/*
var milesYearAgo, milesCurrent, liter;

milesYearAgo = prompt("Hur många mil stod mätaren på förra året?");

milesCurrent = prompt("Vad står din mätarinställning på nu?");

liter = prompt("Hur många liter bensin har förbrukats?");

miles = milesCurrent - milesYearAgo;

var consumption = liter / miles;

console.log("Antal körda mil" + miles);
console.log("Antal liter bensins" + liter);
console.log("Förbrukning per mil" + consumption);
*/

/* Uppgift 3 *****/

/*
var katet1 = prompt('Skriv in längden på en katet');
var katet2 = prompt('Skriv in längden på den andra kateten');

var hypotenusa = Math.sqrt((katet1 * katet1) + (katet2 * katet2));

console.log('Hypotenusan är ' + hypotenusa);
*/

/* Uppgift 4 ***/

/*
var sum = 0;

var tal = prompt('Skriv in tal 1');

sum = sum + parseInt(tal);

tal = prompt('Skriv in tal 2');
sum = sum + parseInt(tal);

tal = prompt('Skriv in tal 3');
sum = sum + parseInt(tal);

tal = prompt('Skriv in tal 4');
sum = sum + parseInt(tal);


tal = prompt('Skriv in tal 5');
sum = sum + parseInt(tal);

var mean = sum / 5;

console.log('Medelvärdet av talen är ' + mean); */

/* Uppgift 5 ***/
/*
var tal = prompt('Skriv in ett tal');

if (tal >= 45 && tal <= 63) {
    console.log('GRATTIS DU VANN. BRA JOBBAT!');
} else {
    console.log('GAME OVER');
} */

/* Uppgift 6 ***/
/*
var tal1 = parseInt(prompt('Skriv in första talet'));
var operator = prompt('Välj räknesätt + - * /');
var tal2 = parseInt(prompt('Skriv in andra talet'));
var result;

if (operator === '+') {
    result = tal1 + tal2;


} else if (operator === '-') {
    result = tal1 - tal2;

} else if (operator === '*') {
    result = tal1 * tal2;

} else if (operator === '/') {
    result = tal1 / tal2;

} else {
    console.log("Write a correct operator");

}

console.log("Result is " + result);

*/
/*

switch (operator) {
    case '+':
        result = tal1 + tal2;
        break;
    case '-':
        result = tal1 - tal2;
        break;
    case '*':
        result = tal1 * tal2;
        break;
    case '/':
        result = tal1 / tal2;
        break;
    default:
        console.log("Write a correct operator");
}

console.log("Result is " + result);
*/

/* Uppgift 7 ***/
/*
var tal1, tal2, tal3;

tal1 = prompt("Skriv in tal 1");
tal2 = prompt("Skriv in tal 2");
tal3 = prompt("Skriv in tal 3");


if (tal1 > tal2 && tal1 > tal3) {
    console.log('Tal 1 är störst');
} else if (tal2 > tal1 && tal2 > tal3) {
    console.log('Tal 2 är störst');
} else {
    console.log('Tal 3 är störst');

}*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
   console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
   console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
   console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
   console.log('There is a draw');
}
*/


/* Uppgift 8 ***/

// Ternary operator
/*var age = parseInt(prompt('Vhat is your age?'));
var firstName = prompt('What is your name?');

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

*/

/* Uppgift 9 ***/

/*****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
*/

/* Uppgift 10 ***/

/*var pin = 1234;
var count = 0;
var userPin;

while (count < 3) {

    userPin = parseInt(prompt('Skriv din pinkod'));

    if (pin === userPin) {
        console.log('GRATTIS DU KAN TA UT PENGARNA');
        break;
    } else {
        count++;
    }

}

console.log('Ditt kort är spärrat');
*/

/* Uppgift 11 ***/

/*
// for loop
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}
*/

/* Uppgift 12 ***/
/*
var factor = parseInt(prompt('What multiplication table?'));
var i = 1;
while (i < 13) {
    console.log(i + ' x ' + factor + ' = ' + (i * factor));
    i++;
}
*/



/*****************************
 * Arrays
 */
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/* Uppgift 13 ***/

/*var names = ['John', 'Mark', 'Jane'];
var numbers = [1, 2, 3];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}*/

/* Uppgift 14 ***/

var numbers = [1, 2, 3, 4];
var number = parseInt(prompt('Gissa!'));


for (var i = 0; i < numbers.length; i++) {

    if (number === numbers[i]) {
        console.log('Grattis!');
        break;
    } 
    else {
        console.log('Synd');
        break;
    }

}


// continue and break statements
/*var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
   if (typeof john[i] !== 'string') continue;
   console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
   if (typeof john[i] !== 'string') break;
   console.log(john[i]);
}*/

// Different data types
/*var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);
*/

/* Uppgift 15 ***/

/*****************************
 * Function Statements and Expressions
 */

// Function declaration

/*function whatDoYouDo(job, firstName) {

//}

// Function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/* Uppgift 16***/
//Slumpande funktion

/* Uppgift 17***/

/*
function tipCalculator(bill) {
   var percentage;
   if (bill < 50) {
       percentage = .2;
   } else if (bill >= 50 && bill < 200) {
       percentage = .15;
   } else {
       percentage = .1;
   }
   return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
           tipCalculator(bills[1]),
           tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/*function factorial(n) {

        var prod = 1;

        for(var i = 1; i <= n; i++) {

        prod = i * prod;
        }
  return prod;
}

var result = factorial(10);

console.log(result);
*/

