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

