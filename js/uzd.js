'use strict';
console.log('uzd.js');

// 13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3

console.groupCollapsed('13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3');
for (let i = 12; i <= 24; i++) {
  let padaugintaIsTriju = i * 3;
  console.log(padaugintaIsTriju);
  let pridetaKeturi = i + 4;
  console.log(pridetaKeturi);
  let bendraSuma = padaugintaIsTriju + pridetaKeturi;
  console.log('bendraSuma ===', bendraSuma);
}
console.groupEnd();
// 1. sukam cikla nuo 12 iki 24
// 2. kiekvieno ciklo metu mes einamaja reiksme (index) padauginam is 3 ir atspausdinam
for (let i = 12; i <= 24; i++) {
  let padaugintas = i * 3;
  // console.log(`reiksme ${i} padauginta gaunasi ${padaugintas}`);
}

// 20. sudauginti skaiciu nuo kintamojo min iki kintamojo max
// min 5. max 10
// sudauginti ir aspausdinti skaiciu daugybos rezultata

let min = 1;
let max = 5;

let total = 1;
for (let i = min; i <= max; i++) {
  // console.log(i);
  total = total * i;
  // console.log('total ===', total);
}
// 5 + 6 + 7 + 8
// total = total + 5
// total = total + 6
// total = total + 7
// Kaip nedaryti bet veikia
// for (min = min; min <= max; min++) {
//   console.log(min);
// }

// console.log('total ===', total);

// 21. Sudeti skaicius nuo 17 iki 33. atspausdinti suma ir kiek buvo ciklu

// 22. sudauginti skaicius nuo -4 iki 7 ir rezultata atspausdinti padalinta is 3.

// total
// ciklas
// dedam prie total
// rezultata padalinam is 3
console.group('22. sudauginti skaicius nuo 4 iki 17 ir rezultata atspausdinti padalinta is 3');
total = 1;

for (let i = 4; i <= 17; i++) {
  total *= i;
}
console.log('total ===', total);
console.log('total / 3 ===', total / 3);

console.groupEnd();

// 23. atspausdinti skaicius stringe nuo 44 iki 66 atskirtus "|| " zenklu

// https://www.w3schools.com/js/js_precedence.asp
let num1 = 5;
// reikm++ => pirma paimama reiksme, ir po to pridedamas vienetas
// ++reikm => pirma pridedamas vienetas ir po to paimama reiksme,
let sak = `eles numeris yra ${++num1} !!!`;
// console.log('sak ===', sak);
// console.log('num1 ===', num1);

// let num2 = num1++;
let num2 = (num1 = num1 + 1);

// 24. Suskaiciuoti kie yra skaiciau 3 kartotiniu nuo 12 iki 57

{
  // 25. suskaiciuoti koks butu vidurkis skaiciu nuo 45 iki 87

  // kintamojo bendrai sumai total
  let total = 0;
  // kintamojo kiekElBuvo
  let kiekElBuvo = 0;
  // ciklas nuo 45 iki 87
  for (let i = 45; i <= 87; i++) {
    //// sumuojam visus einamus skaiciu i total
    total = total + i;
    // kiek skaiciu buvo nuo 45 iki 87
    // kiek buvo skaiciu didinti vienetu
    kiekElBuvo++;
  }
  // console.log('total ===', total);
  // console.log('kiekElBuvo ===', kiekElBuvo);
  // padalinti suma is kiek el
  const avg = total / kiekElBuvo;
  // atspausdinti galutine reiksme
  // console.log('avg ===', avg);
}

// 26. sugeneruoti 3 random skaicius nuo 1 iki 10 ir pranesti:
// a: ar buvo skaicius didesnis uz 7?
// b: ar buvo skaicius mazesnis uz 3?
