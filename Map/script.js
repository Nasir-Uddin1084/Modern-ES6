// Map
let myMap = new Map([
	['first key', 10],
	['second key', 'Hello'],
]);
// add key
myMap.set('third key', 'Hello BD');
console.log(myMap);
console.log(myMap.get('first key'));
// check is there any key
console.log(myMap.has('third key'));
console.log(myMap.has('forth key'));
// size
console.log(myMap.size);
// iterate
for (let x of myMap) {
	console.log(x);
}
for (let [x, y] of myMap) {
	console.log(x, y);
}
// check keys
for (let x of myMap.keys()) {
	console.log(x);
}
// check value
for (let x of myMap.values()) {
	console.log(x);
}
// forEach loop to get data
myMap.forEach((x, y) => {
	console.log(x, y);
});
// map convert into array
let arr = Array.from(myMap);
console.log(arr);
// keys
let arr2 = Array.from(myMap.keys());
console.log(arr2);
// values
let arr3 = Array.from(myMap.values());
console.log(arr3);