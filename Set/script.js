// set
// we can not save the duplicate data in set

let arr = [1, 2, 3, 4, 5, 6, 3, 2, 1];
console.log(arr);

// how to create set
let mySet = new Set([1, 2, 3]);

// mySet.add('Hello');
// mySet.add(2);
// mySet.delete(3);
// mySet.delete('Hello');
// mySet.clear();

console.log(mySet);
// data have or not
console.log(mySet.has(1));
console.log(mySet.has(10));
// set size
console.log(mySet.size);

// <<<<<<<<<<<<< for loop in Set >>>>>>>>>>>>>>>>
let mySet2 = new Set([1, 2, 3, 4, 'Hi', 'Hello']);
for (x of mySet2) {
	console.log(x);
}

// <<<<<<<<<<<<<<<<< Entries >>>>>>>>>>>>>>>>>>>>>
let iter = mySet.entries();
console.log(iter);

// <<<<<<<<<<<<< for loop in Entries >>>>>>>>>>>>>>>>

for (x of mySet.entries()) {
	console.log(x);
}

for (x of mySet.keys()) {
	console.log(x);
}

for (x of mySet.values()) {
	console.log(x);
}

for (let [x] of mySet.entries()) {
	console.log(x);
}
// Speared operator
let iter2 = [...mySet.keys()];
console.log(iter);
