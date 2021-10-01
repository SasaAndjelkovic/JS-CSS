//1. 
var a = 34;

function transform(a) {
    a = a * 2;
}

transform(a);

console.log(a);
// -> 34;


//2.
var mondayToDo = {
    activity: 'do the dishes', 
    song: 'lalala',
    sing: function () {
        console.log(this.song);
    }
};
var tuesdayToDo = {
    activity: 'do the loundary',
    song: 'ooooo',
}

mondayToDo.sing.call(tuesdayToDo);
// -> ooooo


//3. 
var array = ['a', 'b', 'c'];

function transform(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
}

transform(array);
console.log(array);
// -> [ 'A', 'B', 'C' ]


//4. 
var result = Array.prototype.indexOf.call([1, 3, 5, 2, 11], 3);
console.log(result);
// -> 1


//5. 
var obj = { x: 5, y: 13};
console.log(obj.x);
// ->5


//6. 
var a = [2, 3, 4, 5];
var b = [2, 3, 4, 5];

console.log(a === b);
// -> false


//8. 
function orderCoffee() {
    console.log(this.coffee);
}

orderCoffee();

var coffee = 'espresso';
// -> undefined


//9. 
var coffee = 'cappuccino';

function orderCoffee() {
    console.log(this.coffee);
}

orderCoffee();
// -> cappuccino


//10. 
var obj = Object.create({ product: 'mug'});
obj.color = 'red';
console.log(obj.color);
// -> red


//11. 
var result;
result = String.prototype.concat.call('abc', 'ABC');
console.log(result);
// -> abcABC


//12. 
var a = 34;

function transform(a) {
    return a * 2;
}

transform(a);

console.log(a);
// -> 34


//13. 
var obj = { x: 5, y: 13};
console.log(obj.z);
// -> undefined


//14. 
var obj = Object.create({ product: 'mug'});
obj.color = 'red';
obj.product = 'teacup';
console.log(obj.product);
// -> teacup


//15. 
var x = 5;

try {
    if (x < 10) {
        throw new Error ('Wrong input!');
    }
    console.log(x);
} catch (error) {
    console.log(error.message);
}
// -> Wrong input!


//16. 
var a = [2, 3, 4, 5];
var b = a;

console.log(a === b);
// -> true


//19. 
var a = { x: 4, y: 11};
var b = { x: 4, y: 11};

Object.prototype.formatting = function () {
    return '{x:' + this.x + ',' + this.y +'}'
};

console.log(a.formatting() == b.formatting());
// -> true


//21. 
Object.prototype.day = 'Monday';
var plan = { activity: 'JS codding' }
console.log(plan.day);
// -> 'Monday'


//22. 
var obj = { x: 10, y: 5};

function transform(o) {
    o.x += 2;
    o.z = 10;
}

transform(obj);

console.log (obj.x + obj.z);
// -> 22


//23. 
Object.prototype.day = 'Monday';
var plan = { activity: 'JS codding', day: 'always'};

console.log(plan.day);
// -> always


//24. 
var x = 5;

try {
    x *= 3;
    if (x < 10) {
        throw new Error ('Wrong input!');
    }

    console.log(x);
} catch (error) {
    console.log(e.message);
} finally {
    console.log('Done!');
}
// 15 \n Done!


//25. 
var x = 5;

try {
    x *=3;

    if (x < 10) {
        throw new Error ('Wrong input!');
    }

    console.log(x);
} catch (error) {
    console.log (e.message);
}
// -> 15


//26. 
'use strict';

var obj = { x: 5, y: 13};
obj.z = 20;
console.log(obj);
// -> {X: 5, y: 13, z: 20}


//7. 
var coffee = 'cappuccino';

var superCoffee = {
    coffee: 'espresso', 
    strength: 3, 
    orderCoffee: function () {
        console.log(coffee);
    }
};

superCoffee.orderCoffee();
// -> cappuccino
// kada bi u 72. liniji pisalo this.coffee tada je -> espresso


//17. 
var coffee = 'cappuccino';

var superCoffee = {
    coffee: 'espresso', 
    strength: 3,
    orderCoffee: function() {
        console.log(this.coffee);
    }
};

superCoffee.orderCoffee();
// -> espresso


//18. 
var coffee = 'cappuccino';

var superCoffee = {
    coffee: 'espresso', 
    strength: 3, 
    orderCoffee: (function () {
        return coffee;
    }) ()
};

console.log(superCoffee.orderCoffee());
// -> TypeError: superCoffee.orderCoffee is not a function


//20. 
var coffee = 'cappuccino';

var superCoffee = {
    coffee: 'espresso', 
    strength: 3, 
    orderCoffee: (function () {
        return coffee;
    })()
};

console.log(orderCoffee);
// -> ReferenceError: orderCoffee is not defined