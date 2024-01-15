// function  add<T>(a:T, b:T): T{
//     return (a+b);
// }

// add(5,5);

function merge<T extends object, U>(obj1:T, obj2:U){
    return Object.assign(obj1, obj2);
}

const mergedObj = merge({name:"Mohammed"}, {age:25});
console.log(mergedObj.name);


interface Lengthy{
    length:number;
}
function countAndDescribe<T extends Lengthy>(element:T):[T, string]{
    
    let description = element.length==1 ? "Got 1 element":
                      element.length==0 ? "Got 0 element":
                      "Got " + element.length + " elements";

    return [element, description];
}
console.log( countAndDescribe([]) );

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){//First arg has to be an object(no number, string...)
    return obj[key];                                                            //The 2nd arg has to be an existing key in the first arg object
}                                                                               //Otherwise u will see a compilation error when u don't pass this correct syntax
console.log( extractAndConvert({name:"Karim"}, "name") );




