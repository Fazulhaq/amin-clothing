// ES6 classes in JavaScript
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    console.log(this.name + " attacked with " + this.weapon);
  }
}

const ahmad = new Elf("Ahmad", "stone");
console.log(ahmad.attack());

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
