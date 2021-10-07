//  Spread Operator ES6
// kono kicu ke benghe fela
//  Rest Operator ES6
// kono kicu ke joora fela

// <<<<<<<<<<<<<<rest operator on Array >>>>>>>>>>>>>>>
let fruits = ['apple', 'Pine-apple', 'mango', 'Jackfruit'];
let [first, second, ...third] = fruits;
console.log(first);
console.log(second);
console.log(third);
// result will print in array

// <<<<<<<<<<<<<<rest operator on Object >>>>>>>>>>>>>>>
let person = {
	fname: 'nasir',
	lname: 'uddin',
	dob: '5-02-1998',
};
let { fname, ...lname } = person;
console.log(fname);
console.log(lname);
// result will print in object

// <<<<<<<<<<<<<<rest operator on Function >>>>>>>>>>>>>>>
let mornum = [45, 55, 65, 47, 12];
let test = (name, ...number) => {
	//reset operator (function parameter)
	console.log(name);
	console.log(number);
};

// test("nasir", 01201201201)
test('nasir', 10, 20, 30, 40, 50);
test('nasir', ...mornum); //Spread Operator (function argument)

// <<<<<<<<<<<<<<< difference >>>>>>>>>>>>>
// reset operator
let morenum = [45, 55, 65, 47, 12];
// it will make many to one

// spread operator
let str = 'Bangladesh';
// it will divided one to many
