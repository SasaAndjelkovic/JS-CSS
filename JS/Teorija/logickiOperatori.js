// uslovni (ternari operator)
console.log(true ? 1 : 2)
// -> 1
console.log(false ? 1 : 2)
// -> 2 


// skraceno izracunavanje logickih operatora
console.log(null || 'user')
// -> user
console.log('agnes' || 'user')
// -> agnes
//Ako imate vrednost koja bi mogla biti prazna, mozete nakon nje postaviti || sa zamenskom vrednoscu. 
//Ukoliko pocetna vrednost moze biti konvertovana u false, umesto nje cete dobiti zamensku vrednost. 
//0, NaN, i prazan znakovni niz '' racunaju se kao false. Sve ostale vrednosti se racunaju kao true.
console.log(null && 'user')
