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
