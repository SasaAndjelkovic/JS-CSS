//1. Compare Scopes of the var and let Keywords
var camper = 'James';
var camper = 'David';
console.log(camper);    // -> David

let catName = 'James';
let catName = 'David';
console.log(catName);   // -> SyntaxError: Identifier 'catName' has already been declared


//var keyword = it is declared globally, or locally if declared inside a function
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}

console.log(numArray);   // -> [ 0, 1, 2 ]
console.log(i);          // -> 3

//
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}

console.log(numArray);   // -> [ 0, 1, 2 ]
console.log(i);          // -> 3

//
var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}

console.log(printNumTwo());  // -> 3 a ne 2

let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}

console.log(printNumTwo());
console.log(i);                // -> ReferenceError: i is not defined


function checkpoint() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

console.log(checkpoint());  /*Block scope i is:  block scope
                              Function scope i is:  function scope
                              function scope*/


//2. Mutate an Array Declared with const

/*Neki programeri više vole da dodeljuju sve svoje varijable koristeći const podrazumevano, 
osim ako znaju da će morati da ponovo dodele vrednost.
Samo u tom slučaju koriste neka.*/

const s = [5, 6, 7];
s[2] = 45;
console.log(s); //s = [1, 2, 45];
                

const s = [5, 6, 7];
s = [1, 2, 3];
console.log(s);  //TypeError: Assignment to constant variable.*/

const s = [5, 6, 7];
const editInPlace = () => {
    let x = s.pop();
    s.unshift(x);
    return s;
};
console.log(editInPlace());  // -> [7, 5, 6]


//3. Prevent Object Mutation
let obj = {
    name: 'FreeCodeCamp',
    review: 'Awesome'
};

Object.freeze(obj);  //Protecting any changes to an object
obj.review = 'bad';    //pristupa vrednosti koja je pod review kljucem
obj.newProp = 'Test';

console.log(obj); // -> { name: 'FreeCodeCamp', review: 'Awesome' };


let obj = {
    name: 'FreeCodeCamp',
    review: 'Awesome'
};

obj.review = 'bad';    
obj.newProp = 'Test';

console.log(obj);  // -> { name: 'FreeCodeCamp', review: 'bad', newProp: 'Test' }


//4. Use Arrow Functions to Write Concise Anonymous Functions
const myFunc = function() {
    const myVar = 'value';
    return myVar;
};

const myFunc = () => {
    const myVar = 'value';
    return myVar;
};

const myFunc = () => 'value';


//5. Write Arrow Functions with Parametars
const doubler = item => item * 2;

const multiplier = (item, multi) => item * multi;

console.log(doubler(4));
console.log(multiplier(4, 2));
