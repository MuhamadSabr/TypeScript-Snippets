// function Logger(constructor:Function){//It is a convention to start the name of ur decorators with capital letters
//     console.log("Logging...");
//     console.log(constructor);
// }

// @Logger   //Adding the Decorator to a class. Decorators are called when the class is defined directly, no need for call or instantiation of the class.
// class Person{
//     name = "Mohammed";

//     constructor(){
//         console.log("Creating person object...")
//     }
// }


// function Logger(LoggingMessage:string){ //Factory decorators allow us to pass argument when applying them.
//     return (constructor:Function)=>{
//         console.log(LoggingMessage);
//         console.log(constructor);
//     }
// }
// @Logger("Logging on Person class")
// class Person{
//     name = "Mohammed";

//     constructor(){
//         console.log("Creating person object...")
//     }
// }


// function WithTemplate(template:string, hookId:string){
//     console.log("Rendering template")
//     return function(constructor:any){

//         const person = new constructor;

//         const hookElement = document.getElementById(hookId);
//         if(hookElement){
//             hookElement.innerHTML = template;
//             const txt = hookElement.textContent+" "+person.name;
//             hookElement.querySelector("h1")!.textContent= txt;
//         }

//     }
// }


// @WithTemplate("<h1>Head Master Person</h1>", "app")
// @Logger("Loging on Person2")
// class Person2{
//     name = "Mohammed";

//     constructor(){
//         console.log("Creating person object...")
//     }
// }



//=>
// function Log(target:any, proeprtyName:string){
//     console.log("Property decorator")
//     console.log(target)
//     console.log(proeprtyName);
// }

// function AccessorAndMethodDecorator(target:any, proeprtyName:string, descriptor:PropertyDescriptor){
//     console.log("Accessor and Method decorator")
//     console.log(target)
//     console.log(proeprtyName);
//     console.log(descriptor)
// }


// function ParameterDecorator(target:any, key:string, index:number){
//     console.log("Parameter decorator")
//     console.log(target)
//     console.log(key);
//     console.log(index)
// }


// class product{

//     @Log
//     title:string;
//     price:number;

//     @AccessorAndMethodDecorator
//     set setPrice(price:number){
//         if(price<0)
//             return;
//         this.price = price;
//     }

//     constructor(title:string, price:number){
//         this.price = price>0 ?price : 0;
//         this.title = title
//     }

//     @AccessorAndMethodDecorator
//     getTitle(){
//         return this.title;
//     }

//     pricePlusTax(@ParameterDecorator tax:number){
//         return this.price+tax;
//     }

// }



//A class decorator returns a constructor that replaces the one it receives. This class has to be instantiated for this logic to run.
function WithTemplate(template:string, hookId:string){
    console.log("Rendering template")
    return function<T extends {new(...args:any[]):{name:string}}>(originalConstructor:T){ //This return is of withTemplate function not the decorator itself

        return class extends originalConstructor{   //This one is the return of the decorator
            constructor(..._:any[]){
                super();
                const hookElement = document.getElementById(hookId);
                if(hookElement){
                    hookElement.innerHTML = template;
                    const txt = hookElement.textContent+" "+this.name;
                    hookElement.querySelector("h1")!.textContent= txt;
                }
            }
        }

    }
}


@WithTemplate("<h1>Head Master Person</h1>", "app")
class Person2{
    name = "Mohammed";

    constructor(){
        console.log("Creating person object...")
    }
}

const person2 = new Person2();

function Autobind(target:any, methodName:string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjustedDescriptor:PropertyDescriptor ={
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjustedDescriptor;
}

class Printer{
    message = "Good day isn't it";

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const printer = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);







interface ValidatorConfig{
    [property:string]:{
        [validatibleProperty:string]: string[]
    }
}

const registeredValidators: ValidatorConfig ={}


function Required(target:any, propertyName:string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName] : ["Required",]
    }
}

function PositiveNumber(target:any, proeprtyName:string){
    registeredValidators[target.constructor.name] ={
        ...registeredValidators[target.constructor.name],
        [proeprtyName] : ["PositiveNumber"]
    }
}

function validate(target:any){

    const objectPropertiesToValidate =  registeredValidators[target.constructor.name];

    if(!objectPropertiesToValidate){
        return true;
    }

    let result = true;

    for(const property in objectPropertiesToValidate){
        for(const validator of objectPropertiesToValidate[property]){
            switch(validator){
                case "Required":
                    result = result && !!target[property];
                    break;
                case "PositiveNumber":
                    result = result && target[property]>0;
            }
        }
    }
    return result;
}

class Course{

    @Required
    title:string;

    @PositiveNumber
    price:number;

    constructor(title:string, price:number){
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event=>{
    event.preventDefault(); //Stops the submit operation and sends no http request.

    const titleElement = document.getElementById("title") as HTMLInputElement;
    const priceElement = document.getElementById("price") as HTMLInputElement;

    const titleValue = titleElement.value;
    const priceValue = +priceElement.value;


    const course = new Course(titleValue, priceValue);

    if(!validate(course)){
        alert("Invalid input please try again");
        return;
    }

    console.log(course);
});

