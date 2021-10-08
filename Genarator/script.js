// Genarator
function* genFunction() {
  yield 1;
  yield "rahim";
  yield 4;
  yield "karim"
  yield "HEllo World"
}

let iter = genFunction();
console.log(iter.next())