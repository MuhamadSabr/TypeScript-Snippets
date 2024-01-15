"use strict";
const arr = [""];
const arr2 = ["String", "Karim", 5];
console.log(typeof arr);
console.log(typeof arr2);
const p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
});
p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
}).finally(() => {
    console.log("The promise is settled");
});
const userLeft = false;
const userWatchingCatMeme = true;
const watchTutorialPromise = new Promise((resolve, rejected) => {
    if (userLeft) {
        rejected({
            name: "User left",
            message: "):"
        });
    }
    else if (userWatchingCatMeme) {
        rejected({
            name: "User is watching cat meme",
            message: "Web dev <cat meme"
        });
    }
    else
        resolve({
            name: "Watching tutorial",
            message: "(:"
        });
});
watchTutorialPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
const watchTutorial1 = new Promise((resolve, reject) => {
    resolve("Watched 1");
});
const watchTutorial2 = new Promise((resolve, reject) => {
    reject("I got tired and quit at 2");
});
const watchTutorial3 = new Promise((resolve, reject) => {
    resolve("Watched 3");
});
Promise.all([watchTutorial1, watchTutorial2, watchTutorial3])
    .then((messages) => {
    console.log(messages);
}).catch((error) => {
    console.log("One of the promises rejected because: " + error);
});
Promise.race([watchTutorial1, watchTutorial2, watchTutorial3])
    .then((message) => {
    console.log(message);
}).catch((error) => {
    console.log("One of the promises rejected because: " + error);
});
