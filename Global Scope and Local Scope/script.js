// ES6
// <<<<<<<<<<<<<<<<<< var >>>>>>>>>>>>>>>>>>>>>>>
// var
/*
var a = 10; //variable declare
a = a + 7; //reassign 
console.log(a);
a = 50; // again declared 
console.log(a);
*/

// let and const use in ES6
// <<<<<<<<<<<<<<<<<< let >>>>>>>>>>>>>>>>>>>>>>>
// let
/*
let b = 6;
b = b * 67; // reassign
console.log(b);
let b; // error will pop up. can not declare again
*/

// <<<<<<<<<<<<<<<<<< const >>>>>>>>>>>>>>>>>>>>>>>
// const
/*
const c = 7;
// c = c * 67; // error will pop up. can not reassign
console.log(c);
// let b; // error will pop up. can not declare again
*/
// <<<<<<<<<<<<<<<<<< scope >>>>>>>>>>>>>>>>>>>>>>>
// scope find out is variable in local or global
// Global Scope
// Local Scope

//Global Scope
var a = 1;
let b = 2;
const c = 3;
var d = 10;
console.log(`Global Scope:`, a, b, c);
// console.log(`Global Scope:`, a, b, c,e); // we can not call e in global scope

function test() {
	// local scope
	var a = 4;
	let b = 5;
	const c = 6;
	var e = 11;
	console.log(`Function Scope:`, a, b, c, d); // we can call d in local scope
}
test();
console.log(`Global Scope:`, a, b, c); // did count local scope

if (true) {
	var a = 7;
	let b = 8;
  const c = 9;
console.log(`If Scope:`, a, b, c);
}
console.log(`Global Scope:`, a, b, c); // if change the var(a) variable in global scope
/*
for (var a = 0; a < 10; a++){ // var will get the last value
  console.log( `Loop:`,a) 
}
console.log(`Global Scope:`, a, b, c); // for change the var(a) variable in global scope
*/

for (let a = 0; a < 10; a++){ // let will not change the value
  console.log( `Loop:`,a) 
}
console.log(`Global Scope:`, a, b, c); // for change the var(a) variable in global scope