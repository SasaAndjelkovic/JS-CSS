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

