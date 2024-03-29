// 1.
const kobe = {
    points: 21, 
    score: () => {
        this.points++;
        this.points++;
        this.points++;
    }
};

kobe.score();
kobe.score();
kobe.score();

console.log(kobe.points);

// -> 21



//2. How many array references are created in the sequense below?
let a = [1, 2, 3]
let one = a.map(x => x ** 3);
let two = one.filter (x => x + 1);
let tree = two.map (x => x + 1);
let four = tree.reduce((a, b) => a + b, 0);
console.log (one, two, tree, four);

// -> 3
// -> [ 1, 8, 27 ] [ 1, 8, 27 ] [ 2, 9, 28 ] 39



//3. 
const person = {
    name: 'Ljubica',
    age: 26,
    address: {
        coty: 'Pripyat',
        street: 'Vulutsya Zhdanova',
        number: 5
    }
}

const secondPerson = { ...person };
secondPerson.address.number = 7;

console.log(person.address.number, secondPerson.address.number);

// -> 7 7



//4. 
const arr = [];
arr.x = 3;

console.log(arr);

// [ x: 3 ]



//5. 
const then = async () => 3;
then().then(x => console.log(x));

// -> 3



//6.
const arr = [1, 4, 9];
const sqrtSum = arr.forEach(Math.sgrt).reduce((a, b) => a + b, 0);

// -> TypeError: undefined is not a function



//7. 
const getItemData = () => ({
    name: 'Desk',
});

console.log(getItemData().name);

// ->Desk



//8. 
console.log(typeof ('x' instanceof Function));

// -> boolean



//9. Which of these keys will NOT be present on the data object?
const basicData = { id: '333-222' };
const relateId = 'wow';

let data = {};
data[basicData] = basicData;
data[relateId] = relateId;

console.log(data[basicData], data[relateId]);

// -> { id: '333-222' } wow



//10.
const func = (x, y) => {
    console.log(Date.now() - x ** y);
}

func (4, 5);

// -> 1634293792640



//11. 
function sum (a, b, c) {
    let i = c;
    let res = 0;
    for (let i = 0; i < c; i++) {
        res += arguments[i];
    }
    res += arguments[i];
    return res;
}

console.log(sum(1, 2, '3'));

// -> 33undefined 
// 1+2+'3'=33



//12. 
const arr = [1, 2, 3];
const mappedArr = arr.map(i => i ** 2);

let data = {};
data[arr] = arr;
data[mappedArr] = mappedArr;

console.log(data.arr, data[mappedArr]);

// -> undefined [ 1, 4, 9 ]



//13.
let a = 'a';
const b = 'd';

try {
    a = 'b';
    b = 'c';
    var c = 'd';
}
catch { 
    a = 'c';
    let b = 'd';
}
finally {
    a = 'f';
    var d = 'g'
}

console.log(a, 'b', c, d)

// -> f b undefined g



//14. 
let a = 0;
let b = 0;
var c;

function count(a) {
    a++;
    c = a;
    if (b) {
        let c = 0;
        c++;
    }
    b += c;
}

count(a);
count(1);
count(2);

console.log (a, b, c)

// -> 0 6 3 



//15. 
Promise.resolve(3)
    .then(() => {
        throw new Error();
    })
    .then(() => Promise.resolve(4))
    .catch(() => Promise.reject(5))
    .then(x => console.log(x))
    .catch(err => console.log(err));

// ->5



//16.
const later = (fn, ...args) => () => fn(...args);
console.log(later(x => x, 3));

// ->[Function (anonymous)]



//17.
const data = { a: 3, b: 4};
Object.freeze(data);

const otherData = { b: 5, c:6 };
Object.seal(otherData);

const completeData = Object.assign({}, data, otherData)

console.log(completeData.b);

// -> 5



//18. 
Promise.resolve(3)
    .then(() => Promise.resolve(4))
    .then(x => console.log(x));

// -> 4



//19. 
const personOne = {
    name: 'Boban',
    age: 30
};

let boban = personOne;
boban.age = 28;

console.log('boban.age');

// -> boban.age



//20.
const a = '0'
console.log(!!a === false); // -> false

const b = 2.02362;
console.log(b.toFixed(2)==2.02); // -> true

const c = '5.82';
console.log(parseInt(c, 10) == '5'); // -> true

const d = 'false';
console.log(Boolean(d)===false); // -> false

const e = true;
console.log('${e}'===true); // -> false

const f = null;
console.log(f=='null') // -> false

const g = NaN;
console.log(g == parseFloat('true')) // ->false



//21. 
const then = async () => {
    console.log(await Promise.resolve(3))
};

then();

// -> 3



//22. 
class NumberBox {
    constructor(initialValue) {
        this._value = initialValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
    }

    get increment () {
        this.value++;
    }

}

const box = new NumberBox(2);
box.increment;

console.log(box.value);

// -> 3



//23.
Object.prototype.value = 2;
Object.prototype.increaseValue = function() {
    this.value++;
};
const objA = {};
objA.increaseValue();

const objB = {};
Object.prototype.increaseValue();

const objC = { value: 10 };
objC.increaseValue();

console.log(objA.value, objB.value, objC.value);

// -> 3 3 11



//24. 
const later = (func) => {
    return new Promise ((resolve, reject) => {
        if (later) {
            resolve (func(4));
        } else {
            reject (new Error('later is not defined'));
        }
    })
}

later(x => Promise.resolve(12+x))
    .then(console.log)
    .catch(console.log);

// ->16