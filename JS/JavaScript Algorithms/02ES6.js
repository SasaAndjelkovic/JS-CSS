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


//6. Set Default Parameters for Your Functions
const greeting = (name = 'Anonymous') => 'Hello ' + name;

console.log(greeting('John'));
console.log(greeting());


const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));
console.log(increment(5));


//7. Use the Rest Parameter with Function Parameters
const howMany = (...args) => "You have passed " + args.length + ' arguments.';

console.log(howMany(0, 1, 2));
console.log(howMany('string', null, [1, 2, 3], { }));


const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());


//8. Use the Spread Operator to Evaluate Arrays In-Place
//ES5
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); //Math.max(arr) -> NaN

console.log(maximus);


//ES6
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //const spreaded = ...arr; -> will not work

console.log(maximus);


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
//arr2 = arr1; daje isti rezultat. ne vidim smisao. mozda arr2 treba da ostane nepromenjen kada se promeni arr1

console.log(arr2);


//9. Use Destructuiring Assignment to Extract Values from Objects
//ES5
const user = { name: 'John Doe', age: 34};

const name = user.name;
const age = user.age;

//ES6
const user = { name: 'John Doe', age: 34};
const { name, age } = user;
console.log(name);


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today, tomorrow} = HIGH_TEMPERATURES;

console.log(today);


//10. Use Destructuring Assignement to Assign Variables from Objects
const user = { name: 'John Doe', age: 34};

const { name: userName, age: userAge } = user;
console.log(userName, userAge);


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


//11. Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
    johnDOe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

//how to extract...
const { johnDOe: { age, email }} = user;

//how to assigne...
const { johnDOe: { age: userAge, email: userEmail }} = user;


const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75},
    today: { low: 64, high: 77},
    tomorrow: { low: 68, high: 80}
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

console.log(lowToday);


//12. Use Destructuring Assignment to Assign Variables from Arrays
//Destruktiranjem mozete da birate koje elemente zelite da dodelite promenljiv. Spread ne moze jer je raspakuje u listu razdvojenu zarezima
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);  // -> 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // -> 1, 2, 5


let a = 8, b = 6;
[a, b] = [6, 8];
console.log(a, b);


//13. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // -> 1, 2
console.log(arr);  // -> [3, 4, 5, 7]


const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeFirstTwo = list => {
    const [a, b, ...arr] = list;  // a moze i bez a i b, samo dva zareza
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);


//14. Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate = profileData => { 
    const { name, age, nationality, location} = profileData;

}

//ili
const profileUpdate = ({ name, age, nationality, location }) => {

}


const stats = {
    max: 56.78, 
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min}) => (max + min) / 2.0;
console.log(half(stats));


//15. Create Strings using Template Literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;

console.log(greeting);


const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['no-extra-semi', 'no-dup-keys']
}

const makeList = arr => {
    /*const failureItems = [];

    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`li class='text-warning'>${arr[i]}</li>`);
    }*/

    const failureItems = arr.map(item => `li class='text-warning'>${item}</li>`);

    return failureItems;
}

const failureList = makeList(result.failure);

console.log(failureList);


//16. Write Concise Object Literal Declarations Using Object Property Shortland
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

//ES6
const getMousePosition = (x, y) => ({ x, y });


const createPerson = (name, age, gender) => {
    return ({ name, age, gender });
}

console.log(createPerson('Sasa', 49, 'muskarac'));


//17. Write Concise Declarative Functions with ES6
const person = {
    name: 'Taylor',
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};

console.log(person.sayHello());


const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);


//18. Use class Syntax to Define a Constructor Function
//ES5
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

//ES6
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');


class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name);


//19. Use getters and setters to Control Access to an Object
class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return 5/9 * (this._fahrenheit - 32)
    }
    set temperature(celsius) {
        this._fahrenheit = celsius * 9.0 / 5 + 32
    }
}

const thermos = new Thermostat(76);
let tempt = thermos.temperature;
console.log(thermos.temperature);

thermos.temperature = 26;
tempt = thermos.temperature;
console.log(thermos.temperature);


//20. Create a JavaScript Promise
//Promise ima tri stanja: Pending (na cekanju), Resolve (ispunjeno), Reject (odbijeno). U ovom primeru je zauvek zaglavljeno u stanju cekanja
const myPromise = new Promise((resolve, reject) => {

});


const makeServerRequest = new Promise ((resolve, reject) => {

});


//21. Complete a Promise with resolve and reject
const myPromise = new Promise ((resolve, reject) => {
    if(condition_here) {
        resolve('Promise was fulfilled');
    } else {
        reject('Promise was rejected');
    }
});


const makeServerRequest = new Promise ((resolve, reject) => {
    let responseFromServer;
    if (responseFromServer) {
        resolve('We got the data')
    } else {
        reject('Data not received')
    }
});


//22. Handle a FulFilled Promise with then
const makeServerRequest = new Promise ((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve('We got the data');
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});


//23. Handle a Rejected Promise with catch
const makeServerRequest = new Promise ((resolve, reject) => {
    let responseFromServer = false;
    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject('Data not received');
    }
});

makeServerRequest.catch(error => {
    console.log(error);
});