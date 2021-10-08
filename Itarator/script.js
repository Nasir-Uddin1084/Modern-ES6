//  Itarator
/*
console.log('Hello World');
let iterable = ' Hello World';
iterable = [1, 2, 3, 4, 5, 6];
// Symbol.iterator

// console.log(iterable[Symbol.iterator]());
let iter = iterable[Symbol.iterator]();

console.log(iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log('other code!');
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/
// custom iterator
let names = ['Rahim', 'Karim', 'Rahat'];

function customIterator(arr) {
	let i = 0;
	return {
		next: function () {
			return i < arr.length
				? { value: arr[i++], done: false }
				: { done: true };
		},
	};
}
let member = customIterator(names);
/*
console.log(member.next());
console.log(member.next());
console.log(member.next());
*/
console.log(member.next().value);
console.log(member.next().value);
console.log(member.next().value);
