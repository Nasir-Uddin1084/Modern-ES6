//  Symbols

let a = Symbol();
let b = Symbol();
console.log(a, b);
console.log(a == b);
console.log(a === b);
// Symbol use in object

let aa = Symbol;
let person = {
	name: 'nasir',
	age: '26',
	[aa]: 'Hello World!', // Symbol never count as a object property
};
console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));

for (x in person) {
	console.log(x);
}

let sym1 = Symbol('Hello');
let sym2 = Symbol('World');
console.log(sym1);
console.log(sym2);
