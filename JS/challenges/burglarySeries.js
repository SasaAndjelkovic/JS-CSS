//Burglary Series (01): Calculate Total Losses
//Medium
const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  } 

const calculateLosses = obj => 
	Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';
    //Ako nema 0, onda -> TypeError: Reduce of empty array with no initial value
    //reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

console.log(calculateLosses(stolenItems)) // ➞ 100
console.log(calculateLosses({
    painting: 20000,
  })) // ➞ 20000
console.log(calculateLosses({})) // ➞ "Lucky you!"

  
//Burglary Series (02): Most Valuable Item
//Medium
const mostExpensiveItem = obj =>
 // Object.values(obj).Math.max(...arg); // TypeError: Cannot read property 'max' of undefined
 // Math.max(...Object.values(obj)) // -> 2000 / 30 / 50;
 // solution: Object.keys(obj).find(x => obj[x] == Math.max(...Object.values(obj)));
 Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]  // 0ti clan sortiranog niza

console.log(mostExpensiveItem({
  piano: 2000,
})) // ➞ "piano"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
})) // ➞ "tv"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
})) // ➞ "stereo"


//Burglary Series (03): Is It Gone?
//Medium
const obj = {
  tv: 30,
  timmy: 20,
  stereo: 50,
} //➞ "Timmy is gone..."
// Timmy is in the object.

const isItGone = (obj, name) => {  
    const patName = name[0].toUpperCase()+name.slice(1)
    return obj.hasOwnProperty(name) ? `${patName} is gone...` : `${patName} is in object`
}

console.log(isItGone(obj, 'timmy'));

console.log(isItGone({
  tv: 30,
  stereo: 50,
}, 'timmy' ))
// ➞ "Timmy is here!"
// Timmy is not in the stolen list object.

console.log(isItGone({}, 'tammy'))
// ➞ "Timmy is here!"
// Timmy is not in the object.


//Burglary Series (04): Add its Name
//Medium
const addName = (obj, name, value) => 
  Object.assign(obj, {[name]: value})
//https://ui.dev/computed-property-names/
//Object.assign(target, ...sources)

console.log(addName({}, "Brutus", 300)) // ➞ { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400)) // ➞ { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)) // ➞ { piano: 500, stereo: 300, Caligula: 440 }


//Burglary Series (05): Third Most Expensive
//Hard
const thirdMostExpensive = obj => 
    Object.keys(obj).sort((a, b) => obj[b] - obj[a])[2] || false;

console.log(thirdMostExpensive({})) // ➞ false
console.log(thirdMostExpensive({ piano: 100, tv: 200 })) // ➞ false
console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })) //  ➞ "stereo"
console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, })) // ➞ "mirror"


//Burglary Series (06): Convert to Number
//Medium
const convertToNumber = obj => 
    (Object.keys(obj).forEach(k => obj[k] = +obj[k]), obj);
    //forEach(function callbackFn(element, index, array) { ... }, thisArg)

console.log(convertToNumber({ piano: "200" })) // ➞ { piano: 200 }
console.log(convertToNumber({ piano: "200", tv: "300" })) // ➞ { piano: 200, tv: 300 }
console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })) // ➞ { piano: 200, tv: 300, stereo: 400 }


//Burglary Series (07): Make a Copy
//Very easy
const makeCopy = obj =>
  // ({...obj})
  Object.assign({}, obj);

console.log(makeCopy({ piano: 100, tv: 50 })) //➞ { piano: 100, tv: 50 }


//Burglary Series (08): Remove an Entry
//Medium
const removeEntry = (obj, itemName) => {
  const copy = {...obj}
	delete copy[itemName]
	return copy
}

//another solution
const removeEntry = (obj, itemName) => {
    let copy =	Object.assign({}, obj)
    delete copy[itemName]
    return copy
}

console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate")) // ➞ { piano: 300, tv: 100 }
console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror")) // ➞ { painting: 1 }


//Burglary Series (09): Filter Values
//Medium
const isBelow5000 = obj => 
  // const copy = {...obj};
  // console.log(copy);
  // copy.filter(value => value >= 5000);
  // return copy;   hihi, ovako ne moze
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value >= 5000));
  //The Object.fromEntries() method transforms a list of key-value pairs into an object.
  //A new object whose properties are given by the entries of the iterable.
  //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.s

console.log(isBelow5000({ tv: 4999, guitar:5000, fork: 5001 })) // ➞ { guitar:5000, fork: 5001 }
console.log(isBelow5000({ tv: 4999 })) // ➞ {}
console.log(isBelow5000({ guitar: 5000 })) // ➞ { guitar: 5000 }
console.log(isBelow5000({})) // ➞ {}


//Burglary Series (10): Calculate Difference
//Easy
const calculateDifference = (obj, limit) => 
  Object.values(obj).reduce((total, num) => total + num, 0) - limit

console.log(calculateDifference({ "baseball bat": 20 }, 5)) // ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) // ➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) // ➞ 1


//Burglary Series (11): Say What
//Very easy
const whatYouSaid = obj => 
    `${Object.values(obj).join(" ")} ${obj[2]}`;
//The join() method creates and returns a new string by concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a specified separator string. 

console.log(whatYouSaid({ 1: "Mommy", 2: "please", 3: "help" })) // ➞ "Mommy please help please"
console.log(whatYouSaid({ 1: "Me", 2: "innocent", 3: "is" })) // ➞ "Me innocent is innocent"
console.log(whatYouSaid({ 1: "Must", 2: "lawyer", 3: "call" })) // ➞ "Must lawyer call lawyer"


//Burglary Series (12): Get Vodka Bottle
//Hard
const rammsteinNumber = (obj, number) => {  
    //Object.value(obj).filter(a => a === number);  -> TypeError: Object.value is not a function value i filter ne idu zajedno
    const fil = Object.fromEntries(Object.entries(obj).filter(([, value]) => value == number));
    //prvi filter daje parove sa potrebnim brojem
    return Object.keys(obj).filter(a => a !== 'whiskey' && a !=='beer');
    //drugi filter sece kljuceve koji su whiskey i beer
}

console.log(rammsteinNumber({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100)) // ➞ "Rammstein A"
console.log(rammsteinNumber({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50)) // ➞ "Rammstein B"
console.log(rammsteinNumber({ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 }, 70)) // ➞ "Rammstein D"

/*samo prvi filter
{ whiskey: 100, 'Rammstein A': 100 }
{ 'Rammstein B': 50 }
{ 'Rammstein D': 70, beer: 70 }*/

/*samo drugi filter
[ 'Rammstein A', 'Rammstein B' ]
[ 'Rammstein A', 'Rammstein B' ]
[ 'Rammstein A', 'Rammstein D' ]*/

//another solution
const getVodkaBottle = (obj, num) =>
  Object.keys(obj).find(key => key.includes('Rammstein') && obj[key] === num);

//another solution
const getVodkaBottle = (obj, num) =>
	Object.entries(obj).filter(n => n[0].includes("Rammstein") && n[1] === num)[0][0];


//Burglary Series (13): Sort That List
//Hard
const sortList = obj => 
    //Object.fromEntries(Object.entries(obj).sort((a, b) => obj[b] - obj[a])); nema sintaksnu greske ali ne daje rezultat
    Object.fromEntries(Object.entries(obj).sort().reverse());

console.log(sortList({ c: 100, a: 50, b: 10, d: 50 })) // ➞ { d: 50, c: 100, b: 10, a: 50 }
console.log(sortList({ ab: 10, ac: 10, ad: 10 })) // ➞ { ad: 10, ac: 10, ab: 10 }
console.log(sortList({ piano: 5, stereo: 10, suitcase: 1 })) // ➞ { suitcase: 1, stereo: 10, piano: 5 }


//Burglary Series (14): Adjectives Total
//Very easy
const totalAmountAdjectives = obj => 
    //Object.values(obj).reduce((a, b, num) => num++, 0) + 1
    Object.keys(obj).length

console.log(totalAmountAdjectives({ a: "moron" })) // ➞ 1
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) // ➞ 3
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) // ➞ 4


//Burglary Series (15): Number of Occurrences
//Hard
const countNumberOfOccurrences = obj => 
  Object.values(obj).reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {})
  //ostaje pitanje sta je to a[b]; a je objecat, b je key
console.log(countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
})) // ➞ { moron: 2, scumbag: 1, idiot: 2 }

console.log(countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c:"moron"
})) // ➞ { moron: 3 }

console.log(countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag"
})) // ➞ { idiot: 1, scumbag: 1 }

//dario solution // laksi za citanje i razumevanje
const countNumberOfOccurrences = obj => {
    const value = Object.values(obj); // ['moron', 'scumbag', 'moron', 'idiot', 'idiot']
    console.log(value);

    const result = value.reduce((acc, nextValue, index) => {
        console.log('broj iteracije', index);
        console.log('akumulator =', acc, 'sledeca vrednost =', nextValue);
        acc[nextValue] = acc[nextValue] ? acc[nextValue] + 1 : 1;
        console.log(acc[nextValue]);
        console.log(acc);
        return acc;
      }, {})
        return result
  }

  console.log(countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
  }))

//Counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {   // ako postoji key name u objektu allNames povecaj vrednost za jedan
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

console.log(countedNames)
// -> countedNames is:
// -> { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 2 }

//Kuzma primer
let obj = {}
// obj[key] = vrednost - ovde na key dodajes njegovu vrednost
//moron koji je vrednost postaje key
let a = 'a';
obj[a] = 1 //  u konzoli ce pisati {a:1}
console.log(obj);
console.log(obj.a);  // -> 1

//Grouping objects by a property
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }


//Burglary Series (16): Nested objects
//Hard
const determineWhoCursedTheMost = obj => {
    const c = Object.values(obj).reduce((a, b) => a + b.me - b.spouse, 0);
    return (!c ? 'DRAW' : c > 0 ? 'ME' : 'SPOUSE') + '!';
	  //return (c ? c > 0 ? "ME" : "SPOUSE" : "DRAW") + "!";
}

console.log(determineWhoCursedTheMost({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
})) // ➞ "DRAW!"


console.log(determineWhoCursedTheMost({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})) // ➞ "ME!"


console.log(determineWhoCursedTheMost({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 44,
  },
  round3: {
    me: 10,
    spouse: 55,
  },
})) // ➞ "SPOUSE!"


//Burglary Series (17): Who is the Winner?
//Hard
const determineWinnerOfFight = obj => {

  let score = Object
	  				.values(obj)
	  				.reduce((acc, o) => 
					  acc + (o.me === o.spouse ? 0
					  : o.me > o.spouse ? 1 : -1), 0);
	return score > 0 ? `ME!` : score < 0 ? `SPOUSE!` : `NOBODY!`;

}

console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
})) // ➞ "NOBODY!"

console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})) // ➞ "SPOUSE!"


//Burglary Series (18): Detailed List
//Very hard



//Burglary Series (19): Prevent Changes
//Very Easy
const obj = { noChanges: true }

const preventChanges = param => {
  // Write your code here, don't use a return statement
  Object.freeze(param);
  param.noChanges = false;
  param.signature = "whatever"
  return param;

} 

console.log(preventChanges(obj)) // ➞ { noChanges: true }


//Burglary Series (20): Sign Your Name
//Easy

const obj = { yourSignature: "" };

const signYourName = obj => {
  // write your code here
  Object.seal(obj);
  
  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;

} 

console.log(signYourName(obj));// ➞ { yourSignature: "Whatever" }


//Burglary Series (21): Sign Your Name Again
//Medium

const obj = {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: ""
  },
  signature: "Rocky Balboa"
};

const signAgain = obj => {
  // add your code here
  Object.freeze(obj)
	Object.seal(obj.kitchen)

  obj.signature = "Terminator"
  obj.extraProperty = "not possible"
  obj.kitchen.piano = 1000
  obj.kitchen.signature = "Rocky Balboa"
  return obj

} /*➞ {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: "Rocky Balboa", //only this field was changed
  },
  signature: "Rocky Balboa"
}*/
console.log(signAgain(obj));


//Burglary Series (22): Sign All
//Hard
const obj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "",
  },
  bathroom: {
    stereo: 220,
    signature: "",
  },
  signature: "",
};

const signAll = (param, name) => {
  Object.fromEntries/Object.keys
}

console.log(signAll(obj, "Rocky")) /* ➞ {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "Rocky",  // changed
  },
  bathroom: {
    stereo: 220,
    signature: "Rocky",  // changed
  },
  signature: "Rocky",  // changed
}*/


