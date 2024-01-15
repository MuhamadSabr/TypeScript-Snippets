"use strict";
function add() {
    console.log(5 + 5 + " Hi");
    // return 5;
}
function printl(input) {
    console.log(input);
}
function addAndHandle(n1, n2, callBack) {
    const result = n1 + n2;
    callBack(result);
}
addAndHandle(5, 3.43, (result) => {
    console.log("Result", result);
    return 5;
});
