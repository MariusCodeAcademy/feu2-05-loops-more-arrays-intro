'use strict';
console.log('array.js');

let a = 5;
let b = 8;
let c = 10;

// objekto pvz
let vidObj = {
  pirmas: 5,
  antras: 8,
  trecias: 10,
};
// vidObj['antras']
// Masyvas, array = sugrupuota eile reiksmiu
//i 0  1   2 ....
// [5, 8, 10]

// let vidurkiai = [5, 8, 10, 54];
let spalvos = ['red', 'green', 'blue'];

let mixed = ['red', 50, true, null];

// console.log('vidurkiai ===', vidurkiai);
// vidurkiai[1] = 16;
// console.log('vidurkiai[1] ===', vidurkiai[1]);

// prideti reiksme i masyvo gala
// vidurkiai.push(45);

let vidurkiai = [5, 8, 10, 9];
console.log('vidurkiai ===', vidurkiai);

console.log(vidurkiai[0]); // 0
console.log(vidurkiai[1]); // 1
console.log(vidurkiai[2]); // 2
console.log(vidurkiai[3]); // 3
console.log('======================================');
for (let i = 0; i < 4; i++) {
  // console.log(i);
  console.log(vidurkiai[i]);
}
