//  Object Destructing
console.log(` Object Destructing `);
/*
console.log(`Old way`)

let person = {
  firstName :"Nasir" ,
  lastName : "Uddin",
  dob : "09-05-1998"
}

// old way
let fname = person.firstName,
  lname = person.lastName,
  dob = person.dob
console.log(fname, lname, dob);
*/

/*
// ES6 way
console.log(`ES6 way`);
let person = {
	firstName: 'Nasir',
	lastName: 'Uddin',
	dob: '09-05-1998',
};
// property and variable name should be same
let { fname, lname, dob } = person;
console.log(fname, lname, dob);
*/
/*
let { firstName, lastName, dob } = person;
console.log(firstName, lastName, dob);
*/
/*
let { firstName : fname, lastName : lname, dob : myDate } = person;
console.log(fname, lname, myDate);
*/
/*
// Old way
let person = {
	firstName: 'Nasir',
	lastName: 'Uddin',
	dob: '09-05-1998',
};

function displayResult(person) {
	let fname = person.firstName,
		lname = person.lastName,
		dob = person.dob;
	console.log(fname, lname, dob);
}
displayResult(person);
*/
// new way
let person = {
	firstName: 'Nasir',
	lastName: 'Uddin',
	dob: '09-05-1998',
};

function displayResult({ firstName: fname, lastName: lname, dob: myDate }) {
	console.log(fname, lname, myDate);
}
displayResult(person);
