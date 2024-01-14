const multiply = (a, b) => a * b;
const res = multiply(4, 5);
console.log(res);

// curring concept explained
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy6 = curriedMultiply(6);
console.log("6 multiplication using curring function:");
const res1 = curriedMultiplyBy6(3);
const res2 = curriedMultiplyBy6(4);
const res3 = curriedMultiplyBy6(5);
const res4 = curriedMultiplyBy6(6);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// ES6 classes in JavaScript
// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(this.name + " attacked with " + this.weapon);
//   }
// }

// const ahmad = new Elf("Ahmad", "stone");
// console.log(ahmad.attack());

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log("Failed to get data"));

// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     setTimeout(() => {
//       resolve("I have succeed");
//     }, 1000);
//   } else {
//     reject("I have failed");
//   }
// });

// myPromise
//   .then((value) => value + "!!!!")
//   .then((newValue) => console.log(newValue))
//   .catch((rejectValue) => console.log(rejectValue));
