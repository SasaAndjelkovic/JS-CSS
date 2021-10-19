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
