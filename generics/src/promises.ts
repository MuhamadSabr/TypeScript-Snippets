const arr: Array<any> = [""];
const arr2: any[] = ["String", "Karim", 5]; //or const arr2:any = [];

console.log(typeof arr);
console.log(typeof arr2);

const p: Promise<string> = new Promise((resolve, reject)=>{
    let a = 1+2;
    if(a==2){
        resolve("Success");
    }else{
        reject("Failed");
    }
})

p.then((message)=>{
    console.log(message);
}
).catch((message)=>{
    console.log(message);
}
).finally(()=>{
    console.log("The promise is settled");
})


//A callback example which promises are used to replace
const userLeft = false;
const userWatchingCatMeme = true;
// function watchTutorialCallback(callBack:(result:{name:string; message:string})=>void,
//                                 errorCallback:(error:{name:string; message:string})=>void){
//     if(userLeft){
//         errorCallback({
//             name: "User left",
//             message : "):"
//         })
//     }else if(userWatchingCatMeme){
//         errorCallback({
//             name: "User is watching cat meme",
//             message :"Web dev <cat meme"
//         })
//     }else
//     callBack({
//         name:"Watching tutorial",
//         message:"(:"
//     })
// }

// watchTutorialCallback((result)=>{
//     console.log(result);
// },
// (error)=>{
//     console.log(error);
// }
// );

const watchTutorialPromise = new Promise((resolve, rejected)=>{
    if(userLeft){
        rejected({
            name: "User left",
            message : "):"
        })
    }else if(userWatchingCatMeme){
        rejected({
            name: "User is watching cat meme",
            message :"Web dev <cat meme"
        })
    }else
    resolve({
        name:"Watching tutorial",
        message:"(:"
    })
})

watchTutorialPromise.then((message)=>{
    console.log(message);
}
).catch((error)=>{
    console.log(error);
})



const watchTutorial1 = new Promise((resolve, reject)=>{
    resolve("Watched 1")
})

const watchTutorial2 = new Promise((resolve, reject)=>{
    // resolve("Watched 2")
    reject("I got tired and quit at 2")
})

const watchTutorial3 = new Promise((resolve, reject)=>{
    resolve("Watched 3")
})

Promise.all([watchTutorial1, watchTutorial2, watchTutorial3])//Running all at the same time, in paralell
.then((messages)=>{
    console.log(messages);
}
).catch((error)=>{
    console.log("One of the promises rejected because: " + error);
})

Promise.race([watchTutorial1, watchTutorial2, watchTutorial3])//The first one completed will be returned
.then((message)=>{
    console.log(message);
}
).catch((error)=>{
    console.log("One of the promises rejected because: " + error);
})

