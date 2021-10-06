// Array Destructing
let fruits = ['Apple', 'Grapes', 'orange'];
/*
// old way
let fruit1 = fruits[0];
let fruit2 = fruits[1];
console.log(fruit1, fruit2);
*/
// ES6 way
// Use Destructing
let [fruit1, , fruit3] = fruits; //skip fruit fruit2
// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// console.log(fruit1, fruit2, fruit3);
console.log(fruit1, fruit3);
