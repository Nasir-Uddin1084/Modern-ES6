//  Spread Operator ...
console.log(` Spread Operator ES6`);

// String on  Spread Operator ...
let str = 'Bangladesh';
let newStr = [...str];
console.log(newStr);

// Array on  Spread Operator ...
let fruit1 = ['Apple', 'Pine-apple', 'Mango'];
let fruit2 = ['Orange', 'Grape'];
let newFruit = 'Jackfruit';
let newArray = [...fruit1, fruit2, newFruit];
console.log(newArray);

// Object on  Spread Operator ...
let person = {
	fname: 'Nasir',
	lname: 'Uddin',
};

let newPerson = { ...person };
console.log(newPerson);
// add data
let newPersonAdd = { ...person, dob: '5-02-1998' };
console.log(newPersonAdd);
// <<<<<<<<<<<<<<<< Spread Operator on Function >>>>>>>>>>>>>>>>>>>

let numbers = [23, 2, 0, -1, -5];
// console.log(Math.max(numbers)); // error will show
console.log(Math.max(...numbers));

//
let persons = ['Nasir', 'Uddin'];
let test = (fname, lname) => {
	console.log(`Hello ${fname} ${lname}`);
};
// test(persons[0], persons[1])
test(...persons);
