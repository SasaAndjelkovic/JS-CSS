//sredjenija verzija testa 2

//1. 
console.log(n);
var n = 5;
// -> undifined


//2. 
console.log(sum(2, 3));

function sum(x, y) {
    return x + y + 1;
}
// -> 6


//3. 
console.log(mul(2, 3));

var mul = function (x, y) {
    return x * y;
}
// -> TypeError: mul is not a function


//4. 
var a = 10;

function f(a, b) {
    a++;
    b--;
    console.log(a, b);
}

f(a, 2);

console.log(a)
// -> 11 1 \n 10


//5. 
function f() {
    return function (a, b) {
        return a + b;
    }
}

var result = f();

console.log(result);
// -> [Function (anonymous)]


//6.
function f() {
    return function (a, b) {
        return a + b;
    }
}

var result = f ()(1, 3)

console.log (result);
// -> 4


//7. 
function outer(x) {
    function inner(y) {
        return y + 1;
    }
    return x + inner(x);
}
var result = outer(5);

console.log(result);
// -> 11


//8. 
(function () {
    console.log('spring time')
})();
// -> spring time


//9. 
(function (s) {
    console.log(s);
})('JS');
// -> JS


//10. 
var r;

(function (a, b) {
    return a + b;
})(2, 11);

console.log(r);
// -> undefined


//11.
var input = 12;

function f() {
    input = 15;
}

console.log(input);
// -> 12


//12. 
var input = 12;

function f() {
    input = 15;
}

f;

console.log(input);
// -> 12


//13.
var input = 12;

function f() {
    input = 15;
}

f();

console.log(input);
// -> 15
// ako se stavi var input = 15, onda -> 12


//14. 
'use strict';

var x = 1;

function f() {
    return x * 2;
}

f(4);

console.log(x);
// -> 1


//15. 
'use strict';

var x = 1;

function f() {
    y = 3;
    return x * y;
}

f(4);

console.log(x);
// -> ReferenceError: y is not defined


//16. 
function calculate (a, b) {
    var rb = b % 10;
    var ra = a % 10;

    a = a - ra + rb;
    b = b - rb + ra;

    console.log(a, b);
}

calculate(123, 45);
// -> 125, 43


//17. 
var a, b;

function calculate (a, b) {
    var rb = b % 10;
    var ra = a % 10;

    a = a - ra + rb;
    b = b - rb + ra;
}

calculate(123, 45);

console.log(a, b);
// -> undefined undefined


//18. 
var a = [3, 4, 1, 2];

function addOne (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] += 1;
    }
}

addOne(a);

console.log(a);
// -> [4, 5, 2, 3]


//19.
function f(a, b) {
    var result = a + b;
}

console.log (f(2, 1));
// -> undefined


//20. 
console.log(console.log('JS'));
// JS \n undefined


//21. 
function transform(a, b, f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}

transform(2, 4, function (x) {return x + 1;});
// -> 8

//22.
var result;

function add(a, b) {
    return a + b;
}

result = add(2);

console.log(add);
// -> [Function: add]


//23. 
var result;

function add(a, b) {
    return a + b;
}

result = add(2);

console.log(result);
// -> NaN 


//24. 
var a = 12;
var b = 3;
var result;

function add(a, b) {
    return a + b;
}

result = add();

console.log(result);
// -> NaN


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
function transform(a, b, f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}

function double(x) {
    return 2 * x;
}

transform(2, 4, double);
// -> 12


//27. 
transform(2, 4, square);

function transform(a , b, f) {
    var result; 
    result = f(a) + f(b);
    console.log(result);
}

var square = function (x) {
    return x * x;
}
// -> TypeError: f is not a function


//28. 
(function (a, b, condition) {
    if (condition (a, b)) {
        console.log(a);
    } else {
        console.log(b);
    }
})(2, 6, function (x, y) {
    return x > y;
});
// -> 6


//29. 
var a = 20;

function f(n) {
    var result = a + n;
    var a = 30;
    return result;
}

console.log(f(5));
// -> NaN


//30. 
var a = 20;

function f(n) {
    var result = a + n;
    a = 30;
    return result;
}

console.log(f(5));
// -> 25