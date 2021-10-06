//  Arrow Function and Callback Function
// <<<<<<<<<<<<< Function >>>>>>>>>>>>>>>>
//Define Function
function hello() {
	console.log('Hello World');
}
hello();

// Arrow Function with single parameter
// parenthesis can be avoided when there is single parameter
// curly braces can be avoided when there is just single line
let hi = (name) => console.log(name);
hi('Nasir');

// Arrow Function with multiple parameter
let hii = (name, dob) => {
	console.log(name, dob);
};
hii('Nasir', '29-08-1998');
hii('Sajjad', '29-08-1998');
hii('Rahat', '29-08-1998');
hii('Ansu', '29-08-1998');

// Return in normal function
function getSquare(num) {
	return num * num;
}
console.log(getSquare(3));

// Return in Arrow function
// let getSquare0 = num => return num * num; // there will be error
let getSquare0 = (num) => num * num;
console.log(getSquare(3));

// <<<<<<<<<<<<<< call back function >>>>>>>>>>>>>>>

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
//normal call back function
let printAll = function (item) {
  console.log(item);
}
numbers.forEach(printAll);

// call back function with arrow function
let printAll = item => console.log(item);
numbers.forEach(printAll);
// 
//  call back function with arrow function in more simple way
numbers.forEach((item) => console.log(item));
// call back function with mapping
function squareAll(item) {
  return item*item  
}
let squareNum = numbers.map(squareAll)
console.log(squareNum)
*/
/*
let squareAll = (item) => item * item;
let squareNum = numbers.map(squareAll);
 console.log(squareNum);
*/
// simple way
let squareNum = numbers.map((item) => item * item);
console.log(squareNum);
