//  Swap Variables

// old way
console.log(`Old way: `);
let a = 2;
let b = 3;

let temp = a;
a = b;
b = temp;

console.log(`a = ${a} and b = ${b}`);
// ES6 way
console.log(`ES6 way: `);
console.log(`Number`);
// number
let aa = 2;
let bb = 3;
[aa, bb] = [bb, aa]; //Swap Variables
console.log(`a = ${aa} and b = ${bb}`);

// string
console.log(`String:`);
let x = 'nasir';
let y = 'sajjad';
[x, y] = [y, x];
console.log(`x = ${x} and y = ${y}`);

// boolean
console.log(`Boolean:`);
let aaa = true;
let bbb = false;
[aaa, bbb] = [bbb, aaa];
console.log(`a = ${aaa} and b = ${bbb}`);
