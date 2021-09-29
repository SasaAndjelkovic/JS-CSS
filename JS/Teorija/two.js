//1.

var input = 12; 

function f () {
    input = 15;
}

f ();

console.log (input);
// -> 15

//2. 

'use strict'

var x = 1;

function f () {
    y = 3;
    return x * y;
}

f (4);

console.log (x);
// -> ReferenceError: y is not defined
// bez 'use strict' -> 1


//3. 
(function (a, b, condition) {
    if (condition (a, b)) {
        console.log (a);
    } else {
        console.log (b);
    }
}) (2, 6, function (x, y) {
    return x > y;
});
// -> 6 (zato sto je condition false)


//4. 
var a = [3, 4, 1, 2];

function addOne(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] += 1;
    }
}

addOne(a);

console.log (a);
// -> [4, 5, 2, 3]


//5. 
console.log(mul(2, 3));

var mul = function (x, y) {
    return x * y;
}
// -> TypeError: mul is not a function


//6. 
'use strict';

var x = 1;

function f() {
    return x * 2;
}

f(4);

console.log(x);
// -> 1


//7. 
var input = 12;

function f() {
    input = 15;
}

console.log(input);
// -> 12


//8. 
function f(a, b) {
    var result = a + b;
}

console.log(f(2, 1));
// -> undefined


//9. 
var r;

(function (a, b) {
    return a + b;
}) (2, 11);

console.log(r);
// -> undifined


//10.
console.log(sum(2, 3));

function sum (x, y) {
    return x + y + 1;
}
// -> 6


//11. 
var result;

function add(a, b) {
    return a + b;
}

result = add(2);

console.log(add);
// -> [Function: add]


//12. 
var r;

r = (function (a, b) {
    return a + b;
}) (2, 11);

console.log(r);
// -> 13


//13. 
function f() {
    return function (a, b) {
        return a + b;
    }
}

var result = f()(1, 3);

console.log (result);
// -> 4


//14. 
(function () {
    console.log('spring time');
})();
// -> spring time


//15. 
function outer (x) {
    function inner (y) {
        return y + 1;
    }
    return x + inner(x);
}
var result = outer(5);

console.log(result);
// -> 11


//16. 
var a, b;

function calculate (a, b) {
    var rb = b % 10;
    var ra = a % 10;

    a = a - ra +rb;
    b = b - rb +ra;
}

calculate(123, 45);

console.log(a, b);
// -> undifined, undifined


//17. 
var a = 12; 
var b = 3;
var result;

function add(a, b) {
    return a + b;
}

result = add();

console.log(result);
// -> NaN


//18. 
var input = 12;

function f() {
    input = 15;
}

f;

console.log(input);
// -> 12


//19.
var a = 20;

function f(n) {
    var result = a + n;
    a = 30;
    return result;
}

console.log(f(5));
// -> 25


//20. 
var a = 10;

function f (a, b) {
    a++;
    b--;
    console.log(a, b);
}

f(a, 2);

console.log(a);
// -> 11, 1 \n 10


//21. 
console.log(n);
var n = 5;
// -> undefined


//22. 
function calculate(a, b) {
    var rb = b % 10;
    var ra = a % 10;

    a = a - ra + rb;
    b = b - rb + ra;

    console.log(a, b);
}

calculate(123, 45);
// -> 125, 43


//23. 
function transform(a, b, f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}

transform(2, 4, function (x) { return x + 1; });
// -> 8


//24. 
transform(2, 4, square);

function transform(a, b, f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}

var square = function (x) {
    return x * x;
}
// -> TypeError: f is not a function (f(a))


//25. 
var a = 12;
var b = 3; 
var result;

function add() {
    return a + b;
}

result = add(2, 11);

console.log(result);
// -> 15


//26.
var a = 20;

function f(n) {
    var result = a + n;
    var a = 30;
    return result;
}

console.log(f(5));
// -> NaN (ne znam zbog cega)
// Kada nema a30 u funkciji onda je cisto 25, kada je a30 ispred result onda je 35.


//27. 
var result; 

function add(a, b) {
    return a + b;
}
result = add(2);

console.log(result);
// -> NaN


//28. 
(function (s) {
    console.log(s);
})('JS')
// -> 'JS'


//29.
console.log(console.log('JS'));
// -> 'JS' \n undefined


//30. 
function transform (a, b, f) {
    var result;
    result = f(a) + f(b);
    console.log (result);
}

function double(x) {
    return 2 * x;
}

transform (2, 4, double);
// -> 12


//31. 
function f() {
    return function (a, b) {
        return a + b;
    }
}

var result = f();

console.log(result);
// -> [Function (anonymous)]