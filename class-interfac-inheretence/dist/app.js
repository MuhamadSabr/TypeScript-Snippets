"use strict";
const add = (number1, number2) => {
    return number1 + number2;
};
console.log(add(5, 3));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Welcome ${this.name} of age ${this.age}`);
    }
}
let user1;
user1 = {
    name: "Mohammed",
    age: 25,
    greet() {
        console.log("Welcome dear " + this.name);
    }
};
user1.greet();
const person1 = new Person("Mohammed", 25);
console.log(person1.name, +" " + person1.age);
