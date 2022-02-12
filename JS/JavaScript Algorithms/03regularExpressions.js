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
let testStr = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/;
testStr.match(ourRegex); // -> ['Repeat']

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);  // -> ['Repeat, Repeat, Repeat']


let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/gi
let result = twinkleStar.match(starRegex);



//7. Match Anything with WildCard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./
huRegex.test(humStr); // -> true
huRegex.test(hugStr); // -> true


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);



//8. Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aio]g/;
bigStr.match(bgRegex);  // -> ["big"]
bagStr.match(bgRegex);  // -> ["bag"]
bugStr.match(bgRegex);  // -> null
console.log(bogStr.match(bgRegex)[0]);  // -> ["bog"]


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi
let result = quoteSample.match(vowelRegex);
console.log(result);   /*
                        [
                             'e', 'a', 'e', 'o', 'u', 'i',
                             'e', 'a', 'o', 'e', 'o', 'e',
                             'I', 'a', 'e', 'o', 'o', 'e',
                             'i', 'o', 'e', 'o', 'i', 'e',
                             'i'
                        ]
                        */



//9. Match Letters of the Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/     //at je poslednji deo reci
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);


let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result);   /*
                        [
  'T', 'h', 'e', 'q', 'u', 'i', 'c',
  'k', 'b', 'r', 'o', 'w', 'n', 'f',
  'o', 'x', 'j', 'u', 'm', 'p', 's',
  'o', 'v', 'e', 'r', 't', 'h', 'e',
  'l', 'a', 'z', 'y', 'd', 'o', 'g'
]*/



//10. Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
let myRegex = /[a - z0 - 9]/ig;
jennyStr.match(myRegex);


let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);



//11. Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result);
/*
[
  ' ', 'b', 'l',
  'n', 'd', ' ',
  'm', 'c', '.'
]
*/



//12. Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result);    // -> [ 'ss', 'ss' ]



//13. Match Charachters that Occur Zero or More Times
let soccerWord = "goooooool!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);   // -> ["goooooo"]
gPhrase.match(goRegex);  // -> ["g"]
oPhrase.match(goRegex);  // -> null


let chewieQuote = "Aaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);



//14. Find Characters with Lazy Matching
let str = "titanic";
let strRegex = /t[a-z]*i/;  // start with t, ands with i
console.log(str.match(strRegex));    // -> ["titani"]



//15. Match Beginning String Patterns (^caret character)
let firstString = "Ricky is first and can be found."
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // -> true
let notFirst = "You can't find Ricky now."
firstRegex.test(notFirst); // -> false



//16. Match Ending String Patterns
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // -> true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);  // -> false



//17. Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(numbers.match(longHand));    // -> ['4']
console.log(numbers.match(shortHand));   // -> ['42']
console.log(varNames.match(longHand));   // -> ['i']
console.log(varNames.match(varNames));   // -> ['important_var']



//18. Match Everything But Letters and Numbers
let longHand = /[^A-Za-z0-9]/;
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);   // -> ["%"]
sentence.match(shortHand);  // -> ["!"]



//19. Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g      // d for digit
let result = movieName.match(numRegex).length
console.log(result);   // -> 4