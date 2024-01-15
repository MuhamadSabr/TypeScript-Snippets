"use strict";
const usernameInput = document.getElementById("user-name");
if (!usernameInput) {
    console.log("Null was returned");
}
else {
    usernameInput.value = "Hi there";
}
const errorStack = {
    "email": "Invalid email",
    "password": "Password must contain capital letter"
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a + b.toString();
    }
    return +a + +b;
}
const str = add("M", "O");
const num = add(5, 3);
