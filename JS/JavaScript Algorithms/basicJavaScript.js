//1. Comment Your JavaScript Code

//You should create a // style comment that contains at least five letters.

/*
You should create a multi-line comment
that contains at least five letters.
*/


//2. Declare JavaScript Variables
var myName;


//3. Storing Values with the Assigment Operator
var a;
a = 7;


//4. Assigning the Value of the Variable to Another
var a;
a = 7;
var b;
b = a;


//5. Initializing Variables with the Assignment Operator
var a = 9;


//6. Declare String Variables
var myFirstName = 'Sasa';
var myLastName = 'Andjelkovic';


//7. Understanding Uninitialized Variables
var a;
var b;
var c;
var d;
var e;

d = a + b; // -> NaN

c = 'I am an ';

e = c + a; // -> I am an undefined

a = 5;
b = 10;

a = a + 1;
b = b + 5;
c = c + 'String!';

console.log (d, a, b, c, e);


//8. Understanding Case Sensitivity in Variables

//Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Variable assignments
studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000;


//9. Explore Differences Between the var and let Keywords
var camper = 'James';
var camper = 'David';
console.log(camper) // -> David

let camper = 'James';
let camper = 'David';
console.log(camper) // ->SyntaxError: Identifier 'camper' has already been declared


//10. Declare a Read-Only Variable with the const Keyword
const FCC = 'freeCodeCamp';
let fact = 'is cool!';
fact = 'is awesome!'; //obrati paznju: fact je ipak promenjen jer je u drugoj liniji bez let
console.log(FCC, fact); //freeCodeCamp is awesome!
//Uobicajena praksa pri imenovanju konstanti je da se koriste sva velika slova, sa recima odvojenim donjom crtom. 


//11. Add Two Numbers with JavaScript
const SUM = 10 + 10;


//12. Subtract One Number from Another with JavaScript
const DIFFERENCE = 45 - 33;


//13. Multiply Two Numbers with JavaScript
const PROCUCT = 8 * 10;


//14. Divide One Number by Another with JavaScript
const QUOTIENT = 66 / 33;


//15. Increment a Number with JavaScript
let myVar = 87;
myVar++;


//16. Decrement a Number with JavaScript
let myVar = 11;
myVar--;


//17. Create Decimal Numbers with JavaScript
const ourDecimal = 5.7
const myDecimal = 57 / 10;


//18. Multiply Two Decimal with JavaScript
const product = 2.0 * 2.5;


//19. Divide One Decimal by Another with JavaScript
const QUOTIENT = 4.4 / 2.0;


//20. Finding a Remainder in JavaScript

/*Example
5 % 2 = 1
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder) 
*/

/*Usage
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
*/

const REMAINDER = 11 % 3;


//21. Compound Assignement With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

//a = a =12;
a += 12;
b += 9;
c += 7;


//22. Compound Assignement With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;


//23. Compound Assignement With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6

a *= 5;
b *= 3;
c *= 10;


//24. Compound Assignement With Augmented Division
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /=4;
c /= 11;


//25. Escaping Literal Quotes in Strings
const myStr = 'I am a \'single quoted\' string inside \'single qouted\'.';


//26. Escape Sequences in Strings
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

console.log (myStr);
/* -> 
FirstLine
	\SecondLine
ThirdLine
*/


//27. Concatenating Strings with Plus Operator
const myStr = 'This is the start. ' + 'This is the end.';


//28. Concatenating Strings with Plus Equals Operator
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';


//29. Constructing Strings with Variables
const myName = 'TechaSasha';
const myStr = 'My name is ' + myName + 'and I am well';


//30. Appending Variables to Strings
const someAdjective = 'awesome!';
let myStr = 'Learning to code is ';
myStr += someAdjective;


//31. Find the Length of a String
let lastNameLength = 0;
const lastName = 'Lovelace';
lastNameLength = lastName.length; // -> 8


//32. Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = '';
const lastName = 'Lovelace';
firstLetterOfLastName = lastName[0]; // -> L


//33. UnderStand String Immutability
let myStr = 'Jello World';
myStr[0] = 'H';
console.log(myStr);  // -> Jello World
myStr = 'Hello World';
console.log(myStr); // -> Hello World


//34. Use Bracket Notation to Find the Nth Character in a String
const lastName = 'Lovelace';
const thirdLetterOfLastName = lastName[2];


//35. Use Bracket Notation to Find the Last Character in a string
const lastName = 'Lovelace';
const lastLetterOfLastName = lastName[lastName.length - 1];


//36. Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = 'Lovelace';
const secondToLastLetterOfLastName = lastName[lastName.length -2];


//37. Word Blanks
const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'run';
const myAdverbe = 'quickly';

const wordBlanks = 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverbe + '.';


//38. Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['bread', 1];


//39. Nest one Array within Anotther Array
const teams = [['Bulls', 23], ['White Sox', 45]];


//40. Access Array Data with Indexes
const array = [50, 60, 70];
array[0];
const data = array[1];


//41. Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;


//42. Access Multi-Dimensional Array With Indexes
const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14]
];

const firstLevel = arr[3]; // -> [[10, 11, 12], 13, 14]
const secondLevel = arr[3][0]; // -> [10, 11, 12]
const thirdLevel = arr[3][0][1]; // -> 11


//43. Manipulate Arrays With push()
const myArray = [['John', 23], ['cat', 2]];
myArray.push(['dog', 3]); // -> [['John', 23], ['cat', 2], ['dog', 3]]


//44. Manipulate Arrays With pop()
const myArray = [['John, 23'], ['cat', 2]];
const removedFromMyArray = myArray.pop(); // -> remove the last element ['cat', 2]


//45. Manipulate Arrays With shift()
const myArray = [['John', 23], ['cat', 2]];
const removedFromMyArray = myArray.shift(); // -> remove the first element ['John', 23]


//46. Manipulate Arrays With unshift()
const myArray = [['John', 23], ['dog', 3]];
myArray.shift();
myArray.unshift(['Paul', 35]);


//47. Shopping list
const myList = [
	['Chocolate Bar', 15],
	['Prosecco Cardiola', 75],
	['Nescafe Classic', 200],
	['Monini extra virgin', 1],
	['Rio Mare', 160]
];


//48. Write Reusable JavaScript with Functions
function reusableFunction() {
	console.log('Hi World');
};

reusableFunction();


//49. Passing Values to Functions with Arguments
function testFun(param1, param2) {
	console.log(param1, param2);
};

testFun('Hello', 'World');

function fuctionWithArgs(param1, param2) {
	console.log(param1 + param2);
};

fuctionWithArgs(1, 2);


//50. Return a Value from a Function with Return
function timesFive(num) {
	return num * 5;
};

const answer1 = timesFive(5);
const answer2 = timesFive(2);
const answer3 = timesFive(0);


//51. Global Scope and Functions
let myGlobal = 10;

function fun1() {
	oopsGlobal = 5;
};

function fun2() {
	var output = '';
	if (typeof myGlobal != 'undefined') {
		output += 'myGlobal: ' + myGlobal;
	}
	if (typeof oopsGlobal != 'undefined') {
		output += '\noopsGlobal: ' + oopsGlobal;
	}
	console.log(output);
};

fun1();
fun2();


//52. LocalScope and Functions
function myLocalScope() {
	const myVar = 'boo';
	console.log('inside myLocalScope', myVar);
}; 
myLocalScope(); // -> inside myLocalScope boo

console.log('outside myLocalScope', myVar);  // -> ReferenceError: myVar is not defined


//53. Global vs. Local Scope in Functions
const outerWear = 'T-Shirt';

function myOutfit() {
	const outerWear = 'sweater';
	return outerWear;
}

console.log(myOutfit()); // -> sweater


//54. Understanding Undifined Value returned from a Function
let sum = 0;

function addThree() {
	sum = sum + 3;
};

function addFive() {
	sum = sum + 5;
};

console.log(addThree()); // -> undefined
console.log(addFive()); // -> undefined


//55. Assignment with a Returned Value
let processed = 0;

function processArg(num) {
	return (num + 3) / 5;
};

processed = processArg(7);

console.log(processed);  // -> 2


//56. Stand in Line
function nextInLine(arr, item) {
	arr.push(item);
	var removed = arr.shift();
	return removed;
};

const testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));  // -> Before: [1,2,3,4,5]  
console.log(nextInLine(testArr, 6));                // -> 1
console.log('After: ' + JSON.stringify(testArr));   // -> After: [2,3,4,5,6]

//JSON.stringify(value) to convert it into a string.
//JSON.stringify(value, replacer) 
function replacer(key, value) {
	// Filtering out properties
	if (typeof value === 'string') {
	  return undefined;
	}
	return value;
  }
  
  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
  console.log(JSON.stringify(foo, replacer));
  // '{"week":45,"month":7}'


//57. Understanding Boolean Values
function welcomeToBooleans() {
	return true;
};


//58. Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		console.log ('Yes, that was true');
	} else console.log ('No, that was false');
};

trueOrFalse(true);
trueOrFalse(false);


//59. Comparation with the Equality Operator
function testEqual(val) {
	if (val == 12) {
		console.log('Equal');
	} else console.log('Not Equal');
};

testEqual(10);    // -> Not Equal
testEqual(12);    // -> Equal
testEqual('12');  // -> Equal


//60. Comparasion with the Strict Equality Operator
function testStrict(val) {
	if (val === 7) {
		console.log('Equal');
	} else console.log('Not Equal');
};

testStrict(10);
testStrict(7);
testStrict('7');

//61. Practice comparing different values
function compareEquality(a, b) {
	if (a === b) {
		console.log('Equal');
	} else console.log('Not Equal');
};

compareEquality(10, '10');


//62. Comparation with the Inequality Operator
function testNonEqual(val) {
	if (val != 12) {
		console.log('Not Equal');
	} else {
		console.log('Equal');
	};
};

testNonEqual(99);


//63. Comparation with the Strict Inequality Operator
function testStrictNonEqual(val) {
	if (val !== 17) {
		console.log('Not Equal');
	} else {
		console.log('Equal');
	};
};

testStrictNonEqual(17);


//64. Comparation with the Greater Than Operator
function testGreaterThan(val) {
	if (val > 100) {
		console.log('Over 100');
	} else if (val > 10) {
		console.log('Over 10');
	} else {
		console.log('10 and Under');
	};
};

testGreaterThan(8);
testGreaterThan(18);
testGreaterThan(108);


//65. Comparation with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
	if (val >= 20) {
		console.log('20 or Over');
	} else if (val >= 10) {
		console.log('10 or Over');
	} else {
		console.log('Less than 10');
	};
};

testGreaterOrEqual(0);
testGreaterOrEqual(10);
testGreaterOrEqual(22);


//66. Comparation with the Less Than Operator
function testLessThan(val) {
	if (val < 25) console.log(val + ' is Under 25');
		else if (val < 50) console.log(val + ' is Under 50');
			else console.log(val + ' is 50 or Over');
};

testLessThan(24);
testLessThan(48);
testLessThan(56);


//67. Comparation with the Less Than Or Equal To Operator
const testLessOrEqual = val => {
	val <= 12 ? console.log(val + ' is Smaller Than Or Equal to 12') :
		val <= 24 ? console.log(val + ' is Smaller Than Or Equal to 24') : console.log(val + ' is More Than 24');
};

testLessOrEqual(10);
testLessOrEqual(20);
testLessOrEqual(50);


//68. Comparation with the Logical And Operator
function testLogicalAnd(val) {
	if (val >= 25) {
		if (val <=50) {
			return 'Yes';  //suvise je komplikovano sa console.log i else
		}; 
	};
	return 'No';
};

console.log(testLogicalAnd(20));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(60));

//&& nacin
function testLogicalAnd(val) {
	if (val >=25 && val <=50) console.log('Yes');
		else console.log('No'); 
}

testLogicalAnd(20);
testLogicalAnd(30);
testLogicalAnd(60);

//ES6 nacin
const testLogicalAnd = val => 
	val >= 25 && val <= 50 ? console.log('Yes') : console.log('No');

testLogicalAnd(20);
testLogicalAnd(30);
testLogicalAnd(60);


//69. Comparation with the Logical Or Operator
const testLogicalOr = val =>
	val < 10 || val > 20 ? console.log('Outside') : console.log('Inside');

testLogicalOr(0);
testLogicalOr(10);
testLogicalOr(30);


//70. Introducing Else Statements
function testElse(val) {
	result = '';
	if (val > 5) result = 'Bigger than 5';
		else result = 'Smaller or equal than 5';
	console.log(result);
};

testElse(4);
testElse(8);


//71. Introducing Else If Statements
function testElseIf(val) {
	if (val > 10) {
		console.log(val + ' Greater than 10');
	} else if (val < 5) {
		console.log(val + ' Smaller than 5')
	} else {
		console.log(val + ' Between 5 and 10');
	}
};

testElseIf(3);
testElseIf(7);
testElseIf(12);


//72. Logical Order in If Else Statements
function foo(x) {
	if (x < 1){
		console.log('Less than one');	
	} else if (x < 2) {
		console.log('Less than two');
	} else {
		console.log('Greater than or equal to two');
	}
};  // -> Less than one

function bar(x) {
	if (x < 2) {
		console.log('Less than two');
	} else if (x < 1) {
		console.log('Less than one');
	} else {
		console.log('Greater than or equal to two');
	}
};  // -> Less than two

foo(0);
bar(0);


//73. Chaining If Else Statements
function testSize(num) {
	if (num < 5) {
		console.log('Tiny');
	} else if (num < 10) {
		console.log('Small');
	} else if (num < 15) {
		console.log('Medium');
	} else if (num < 20) {
		console.log('Large');
	} //else if (num >=20) {
	  else { 
		console.log('Huge')
	};
}

testSize(0);
testSize(5);
testSize(25);


//74. Golf Code;
const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

function golfScore(par, strokes) {
	if (strokes == 1) {
		console.log(names[0]);
	} else if (strokes <= par - 2) {
		console.log(names[1]);
 	} else if (strokes == par - 1) {
		console.log(names[2]);
	} else if (strokes == par) {
		console.log(names[3]);
	} else if (strokes == par + 1) {
		console.log(names[4]);
	} else if (strokes == par + 2) {
		console.log(names[5]);
	} else {
		console.log(names[6]);
	}
};

golfScore(5, 4);


//75. Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
	let answer = '';

	switch(val) {
		case 1:
			answer = 'alpha';
			break;
		case 2:
			answer = 'beta';
			break;
		case 3:
			answer = 'gamma';
			break;
		case 4:
			answer = 'delta';
			break;
	}

	console.log(answer);
};

caseInSwitch(3);










