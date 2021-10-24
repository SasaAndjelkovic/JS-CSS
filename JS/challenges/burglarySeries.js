//Burglary Series (01): Calculate Total Losses

const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  } 

const calculateLosses = obj => 
	Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';

console.log(calculateLosses(stolenItems)) // ➞ 100
console.log(calculateLosses({
    painting: 20000,
  })) // ➞ 20000
console.log(calculateLosses({})) // ➞ "Lucky you!"

  
