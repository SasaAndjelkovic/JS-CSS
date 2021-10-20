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
