interface AddFn{  //Define function type using interfaces
    (a:number, b:number): number;
}

const add:AddFn =(number1:number, number2:number)=>{
    return number1+number2;
}
console.log(add(5,3));


interface Mmd{}
interface Named {
    readonly name: string;
}

interface Greetable extends Named, Mmd{
    age : number;

    greet():void;
}

class Person implements Greetable{

    public name: string;
    public age : number;

    constructor(name:string, age:number){
        this.name = name;
        this.age  = age;
    }

    greet(): void {
        console.log(`Welcome ${this.name} of age ${this.age}`);
    }
}

let user1: Greetable;

user1 = {
    name : "Mohammed",
    age  : 25,

    greet(){
        console.log("Welcome dear " + this.name);
    }
}
user1.greet();
const person1:Greetable = new Person("Mohammed", 25); //The type is Greetable any thing that is not on Greetable and is on Person cannot be accessed this way.
console.log(person1.name, + " " + person1.age);

// person1.name = "Ahmed"; the property in the interface is readonly so u cannot change it after its been initialized.
