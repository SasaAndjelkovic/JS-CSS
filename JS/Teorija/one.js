//1.

var x = [1, 8, 9, 9, 2]
console.log(x[13]);
// -> undefined


//2. 
var a = 4, b = 3;
if (a == b) {
    console.log('The numbers are equal!');
} else {
    console.log('Nope, they arent!');
}
// -> The numbers are equal! U pitanju je jednostruki znak jednakosti


//3. 
console.log('312' == 312);
//true


//4. 
var value = 2;
switch (value) {
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case '2':
        console.log('Hmmm')
        break;
    default:
        console.log('^*^');
}
// -> '2'\n'3'\n'Hmmm'


//5.
var x;
console.log(x);
// -> undifined


//6. 
console.log('Good morning!');
// -> 'Good morning!'


//7. 
var input = 0xA41;
console.log (typeof input);
// -> number


//8. 
var a = [2 , 3, 'abc', 11, -7];
console.log(a[a.length - 1]);
// -> -7


//9. 
var n = 10;
n *=4;
console.log(n);
// -> 40


//10.
var array = ['abc', 'ef', 'ghi', 'jkl'];
console.log(array[2]);
// -> 'ghi'


//11. 
console.log(10 * 'Abc')
// -> Nan


//12. 
console.log([2, 3, 4] == [2, 3, 4])
// -> false


//13. 
console.log(2 > 10 ? 'two' : 5 > 3 ? 'five' : 'three');
// -> 'five'


//14. 
console.log(typeof 2 + 3);
// -> 'number3


//15. 
var x = 10;
var y = 5;
console.log(x + 'y = ' + (x+y));
// -> '10y = 15'


//16.
var a = 12;
var result = 2;

if (a > 10) {
    result = result + 2;
} else {
    result = result - 2;
}

console.log(result);
// -> 4


//17.
console.log(2e2 + 1);
// -> 201


//18.
console.log(2 < 3 + 5)
// -> true


//19. 
var a = 10, b = 5;
var result = a || b++;
console.log(a, b);
// -> 10 5


//20. 
console.log(2 < 3 < 1);
// -> false


//21. 
var a = [[1, 2, 3], [4, 5, 6], 8, [9, 10]];
console.log(a[3][0]);
// -> 9


//22. 
var array = ['s', 'c', 'r', 'i', 'p', 't'];
array.length = 0;
console.log(array);
// -> []


//23. 
console.log('312' === 312);
// -> false


//24. 
var x = 10;
var y = 5;
console.log (x + 'y = ' + x+y);
// -> '10y = 105'


//25. 
var x = 1, y = 3, z = 8;
x = y = y = 8;
console.log (x, y, z);
// -> 8 8 8


//26. 
console.log (typeof typeof 1);
// -> string