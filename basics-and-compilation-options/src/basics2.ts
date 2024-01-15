enum Position {
    AUTHOR,
    ADMIN,
    READ_ONLY,
    ACTOR
}

const person :{
    name : string;
    age  : number;
    hobbies : string[];
    role : [number, string, true?]
    position : Position
}= {
    name: "Mohammed",
    age: 30,
    hobbies : ["Reading", "Studying", "Movies"],
    role : [2, "Captian"],
    position : Position.ACTOR
}


// person.role.push("Jaban", 1, "karim"); //Push is an exception, but u still get type support.
person.role = [2, "ahmed"] //This syntax has full support of a tuple
let myTuple: [number, string] = [3, "mmd"]  //destructuring


if(person.position==Position.ADMIN){
    console.log("Admin it is")
}