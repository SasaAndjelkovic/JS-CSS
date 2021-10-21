//1. BITWISE OPERATIONS
const bitwiseAND = (n1, n2) => n1 & n2;
const bitwiseOR = (n1, n2) => n1 | n2;
const bitwiseXOR = (n1, n2) => n1 ^ n2;  //same -> 0, different -> 1

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));


//2. Add up the Numbers from a Single Number
const addUp = (num) => {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum = sum + i;
        //sum += i;
	}
	return sum;
}

console.log(addUp(5));
//the best solution
const addUp = num => num * ( num + 1 ) / 2;

console.log(addUp(5));


//3. Matchstick Houses
const matchHouses = step => step === 0 ? 0 : 6 + (step - 1) * 5

console.log(matchHouses(0));
console.log(matchHouses(5));


//4. Left Shift by Powers of Two
const shiftToLeft = (x, y) => x * 2 ** y

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(12, 4));
console.log(shiftToLeft(46, 6));


//5. Find the Smallest and Biggest Numbers
const minMax = array => {
	let min = +Infinity;
	let max = -Infinity;
	for (let i = 0; i < array.length; i++) {
		if (min > array[i]) min = array[i];
		if (max < array[i]) max = array[i];
	}
	return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

//another solution
const minMax = array => [Math.min(...array), Math.max(...array)];
console.log(minMax([1, 2, 3, 4, 5]));

//another solution 2
const minMax = array => {
	array.sort((a, b) => a - b);
	return [array[0], array[array.length-1]];
  }
console.log(minMax([1, 2, 3, 4, 5]));


//6. Is it Time for Milk and Cookies?
const timeForMilkAndCookies = dateToTest => (dateToTest.getMonth() === 0 && dateToTest.getDate() === 7);
// dateToTest je u stvari (new Date(2013, 0, 7))

console.log(timeForMilkAndCookies(new Date(2013, 0, 7))) // ➞ true
console.log(timeForMilkAndCookies(new Date(2013, 11, 23))) // ➞ false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))) // ➞ true

console.log(new Date(2013, 0, 7));


//7. Which Function Returns the Larger Number?
const whichIsLarger = (f, g) => 
	f() === g() ? res = 'neither' : (f() > g()) ? res = 'f' : res = 'g';
	

console.log(whichIsLarger(() => 5, () => 10)) // ➞ "g"
console.log(whichIsLarger(() => 25,  () => 25)) // ➞ "neither"
console.log(whichIsLarger(() => 505050, () => 5050)) // ➞ "f"


//8. Convert a Number to Base-2
const binary = decimal => {
	if (decimal === 0) return '0';
	let med = 0;
	for (let i = 0; i < 10; i++) {
		if (decimal >= 2**i) med++;
	}
	let str ='';
	for (let j = med-1; j >= 0; j--) {
		if (decimal >= 2**j) {
			str += '1';
			decimal = decimal - 2**j;
		} else str += '0';
	}
	return str;
}

console.log(binary(1)); // ➞ "1"
// 1*1 = 1
console.log(binary(5)); //➞ "101"
// 1*1 + 1*4 = 5
console.log(binary(10)); // ➞ "1010"
// 1*2 + 1*8 = 10

//the best solution
const binary = decimal => decimal.toString(2);


//9. Check if One Array can be Nested in Another
const canNest = (arr1, arr2) =>
	Math.min(...arr1) > Math.min(...arr2) && 
	Math.max(...arr1) < Math.max(...arr2);

console.log(canNest([1, 2, 3, 4], [0, 6])) //➞ true
console.log(canNest([3, 1], [4, 0])) // ➞ true
console.log(canNest([9, 9, 8], [8, 9])) // ➞ false
console.log(canNest([1, 2, 3, 4], [2, 3])) //➞ false


//10. RegEx Exercise 1: Find the Time
const str = 'Breakfast at 09:00 in the room 123:456';
const regexpFindTime =  /\b[0-9][0-9]:[0-9][0-9]\b/g; // bez g stampa ceo niz. Moze se dodati [0] na kraju u console.log

console.log(str.match(regexpFindTime)); // -> 09:00
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges



//11. RegEx XIV: Group Ranges x|y
const REGEXP =  /red flag|blue flag/g

console.log("red flag blue flag".match(REGEXP)) // ➞ ["red flag", "blue flag"]
console.log("yellow flag red flag blue flag green flag".match(REGEXP)) // ➞ ["red flag", "blue flag"]
console.log("pink flag red flag black flag blue flag green flag red flag ".match(REGEXP)) // ➞ ["red flag", "blue flag", "red flag"]


//12. Promises III: Native Promise, Introducing the Executor
/*Promises are just objects that contain the outcome of asynchronous operations. 
So when do you use one? When you want to control the outcome of an asynchronous operation. 
All you have to do is wrap the asynchronous function with a promise constructor.

The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. 
Both are functions that you use to pass or reject a value that is usually the result of the async operation.
setTimeout is a browser API that is very commonly used in tutorials to represent async operations. 
After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.

Here's an example of a simple promise:*/

let promise = new Promise ((resolve, reject) => {
	setTimeout(() => {
		resolve = 'edabit';
	}, 1000)
})
//sve slozenije koncepte radi posle JavaScriptElokventno