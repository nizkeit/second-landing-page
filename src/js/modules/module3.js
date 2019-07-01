let name = 'Andrew';
let age = 25;

let sayHello = (name,age) => console.log(`My name is ${name} and ... ${age}`);

/* EXPORTING DEFAULT MODULE AND USING ES6 shortcuts: */

export default {
  name,
  age,
  sayHello
}
