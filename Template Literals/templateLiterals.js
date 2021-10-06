// old way
console.log('first line \nsecond line');
console.log('third line');

// ES6 way
// Template Literals
console.log(`First line
second line
third line`); // Backtick

// update way
let a = `forth line
fifth line
sixth line`;
console.log(a);

// <<<<<<<<<<<<<<<<< Example >>>>>>>>>>>>>>

// old way
let name = 'Rahim';
let age = 30;
let dob = '5 february 1998';
console.log(
	'His name is ' +
		name +
		'\n' +
		' His age is ' +
		age +
		'\n' +
		' His date of Birth is ' +
		dob
);

// ES6 way
let newName = 'Rahim';
let newAge = '25';
let newDob = '5 february 1998';
console.log(`His name is ${newName}
His age is ${newAge}
His Date of Birth is ${newDob}`);

// Another Example
let x = 1593572846;
let y = 9517538264;
console.log(`The result is ${x + y}`);
console.log(`${x} + ${y} = ${x + y}`);
