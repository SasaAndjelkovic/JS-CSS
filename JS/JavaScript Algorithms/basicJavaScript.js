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

const firstLevel = arr[3];
const secondLevel = arr[3][0];
const thirdLevel = arr[3][0][1];


//43. Manipulate Arrays With push()
const myArray = [['John', 23], ['cat', 2]];
myArray.push(['dog', 3]); // -> [['John', 23], ['cat', 2], ['dog', 3]]


//44. Manipulate Arrays With pop()
const myArray = [['John, 23'], ['cat', 2]];
const removedFromMyArray = myArray.pop(); // -> remove the last element ['cat', 2]


//45. Manipulate Arrays With shift()
const myArray = [['John', 23], ['cat', 2]];
const removedFromMyArray = myArray.shift(); // -> remove the first element ['John', 23]
