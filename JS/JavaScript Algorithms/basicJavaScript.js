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