//Burglary Series (01): Calculate Total Losses
const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  } 

const calculateLosses = obj => 
	Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';
    //Ako nema 0, onda -> TypeError: Reduce of empty array with no initial value
    //reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)s

console.log(calculateLosses(stolenItems)) // ➞ 100
console.log(calculateLosses({
    painting: 20000,
  })) // ➞ 20000
console.log(calculateLosses({})) // ➞ "Lucky you!"

  
//Burglary Series (02): Most Valuable Item
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
const addName = (obj, name, value) => 
  Object.assign(obj, {[name]: value})
//https://ui.dev/computed-property-names/
//Object.assign(target, ...sources)

console.log(addName({}, "Brutus", 300)) // ➞ { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400)) // ➞ { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)) // ➞ { piano: 500, stereo: 300, Caligula: 440 }


//Burglary Series (05): Third Most Expensive
const thirdMostExpensive = obj => 
    Object.keys(obj).sort((a, b) => obj[b] - obj[a])[2] || false;

console.log(thirdMostExpensive({})) // ➞ false
console.log(thirdMostExpensive({ piano: 100, tv: 200 })) // ➞ false
console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })) //  ➞ "stereo"
console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, })) // ➞ "mirror"


//Burglary Series (06): Convert to Number
const convertToNumber = obj => 
    (Object.keys(obj).forEach(k => obj[k] = +obj[k]), obj);
    //forEach(function callbackFn(element, index, array) { ... }, thisArg)

console.log(convertToNumber({ piano: "200" })) // ➞ { piano: 200 }
console.log(convertToNumber({ piano: "200", tv: "300" })) // ➞ { piano: 200, tv: 300 }
console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })) // ➞ { piano: 200, tv: 300, stereo: 400 }


//Burglary Series (07): Make a Copy
const makeCopy = obj =>
  // ({...obj})
  Object.assign({}, obj);

console.log(makeCopy({ piano: 100, tv: 50 })) //➞ { piano: 100, tv: 50 }


//Burglary Series (08): Remove an Entry
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
const calculateDifference = (obj, limit) => 
  Object.values(obj).reduce((total, num) => total + num, 0) - limit

console.log(calculateDifference({ "baseball bat": 20 }, 5)) // ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) // ➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) // ➞ 1