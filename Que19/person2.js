const person = require ("./person")

const person1 = new person ("Rishab",23);

console.log(person1.getName());
console.log(person1.getAge());
person1.introduce()