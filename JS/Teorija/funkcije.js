// Promenljive i opseg vidljivosti
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
// -> 60
}

console.log(x + y + z)
// -> ReferenceError: y is not defined


const halve = function(n) {
// function halve (n) {      Notacija deklaracije
// const halve = (n) => {    Strelicaste funkcije
    return n / 2;  
};

let n = 10;
console.log(halve(100));
// -> 50
//Kada kod u funkciji halve referencira n, on vidi sopstveno n, a ne globalno n
console.log(n);
// -> 10


console.log('Buducnost kaze:', future());

function future () {
    return 'Nikada necete imate letece automobile';
}
// Notacija deklaracije su konceptualno premestene na vrh svog opsega


const power = (base, exponent) => {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent -1);
    }
}

console.log(power(2, 3));
//rekurzivna funkcija koja je resila ovaj zadatak za 23.46 sekundi
//sporo, a autori kazu da je elegentnije resenje od onog sa petljom
//p.s. petlja je brzas