//Regular expressions are very powerful patterns that help match, search and replace text

//1. Using the Test Method
let testStr = 'freeCodeCamp';
let testRegex = /Code/;
console.log(testRegex.test(testStr));  // -> true


let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString);



//2. Match Literal Strings
let testStr = 'Hello, my name is Kevin';
let testRegex = /Kevin/;
testRegex.test(testStr);   // -> true

let wrongRegex = /kevin/;
wrongRegex.test(testStr);  // -> false


let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);



//3. Match a Literal String with Different Possibilities
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result);   // -> true



//4. Ignore Case While Matching
let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString));    // -> true



//5. Extract Matches
'Hello, World!'.match(/Hello/);
/Hello/.test('Hello, World!');


let ourStr = 'Regular expressions';
let ourRegex = /expressions/;
let result = ourStr.match(ourRegex);


let extractStr = "Extract the word 'coding' from this string."
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);


//6. Find More Than the First Match
let testStr = 'Repeat, repeat, repeat';
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex));






