"use strict";
console.log("Start writing your code here...");
const userID = "MMD";
let userName = "Mohammed";
const arr = ["Mohammed", "Ahmed", "Karim"];
let [name1, name2, ...remaining] = arr;
console.log(arr, name1, name2, remaining);
let names = ["Jawhar"];
names.push(...arr); //...Is called spread u point it to an array, and that gives the arrays elements one by one instead of the whole object
console.log(names);
const person = {
    firstName: "Ali",
    age: 15
};
const personCopied = Object.assign({}, person); //U remember that assigning will make the variable point to the same memory location, not copoing.
console.log(Object.assign({}, personCopied));
const { firstName: fName, age } = person; //Instead of [] u use {} and the names must be the actual property names of the object
console.log("Name", fName); //Since we override the peroprty name to something else we can only use the name overriding the property
const add = (n1, n2, ...n3) => {
    return n3.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, n1 + n2);
};
console.log(add(5, 34.9, 3, 0, 4, 7));
