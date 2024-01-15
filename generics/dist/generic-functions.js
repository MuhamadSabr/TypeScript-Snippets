"use strict";
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergedObj = merge({ name: "Mohammed" }, { age: 25 });
console.log(mergedObj.name);
function countAndDescribe(element) {
    let description = element.length == 1 ? "Got 1 element" :
        element.length == 0 ? "Got 0 element" :
            "Got " + element.length + " elements";
    return [element, description];
}
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "Karim" }, "name"));
