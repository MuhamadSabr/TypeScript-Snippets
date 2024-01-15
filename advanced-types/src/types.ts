type Admin = {
    name:string;
    privileges:string[];
}

type Employee = {
    name:string;
    startDate:Date;
}

interface ElevatedEmployeeInterface extends Admin, Employee{}

type ElevatedEmployee = Admin & Employee;

const mohammed:ElevatedEmployeeInterface ={
    name:"Mohammed",
    startDate: new Date(),
    privileges : ["Create-User"]
}



type UnknownEmployee = Admin | Employee;

function printEmployeeInfo(employee:UnknownEmployee){
    console.log(employee.name);
    if('privileges' in employee){
        console.log(employee.privileges);
    }
    if('startDate' in employee){
        console.log(employee.startDate);
    }
}

printEmployeeInfo(mohammed);

const ahmed:Employee = { name:"Ahmed", startDate:new Date()}
printEmployeeInfo(ahmed);


interface Vechile {
    start(): void;
    drive():void;
}

class Car implements Vechile{
    start(): void {
        console.log("Start engine");
    }
    drive(): void {
        console.log("Start driving journey");
    }
}

class Truck implements Vechile{

    start(): void {
        console.log("Start all engines");
    }

    loadCargo(){
        console.log("Loading cargo");
    }

    drive(): void {
        console.log("Drive cargo");
    }
}

function printVechileInfo(vechile:Vechile){
    vechile.start();
    if(vechile instanceof Truck){
        vechile.loadCargo();
    }
    vechile.drive();
}
const BMW = new Car;
const tructory = new Truck;
printVechileInfo(BMW);
printVechileInfo(tructory);


interface Bird{
    type:"bird";
    fly():void;
}
interface Horse{
    type:"horse";
    run():void;
}

type Animal = Bird | Horse;

function discriminatedUnion(animal:Animal){
    switch(animal.type){
        case 'bird':
            console.log(animal.fly());
            break;
        case 'horse':
            console.log(animal.run());
            break;
        default:
            console.log('Undefined');
    }
}

const bird:Animal = {
    type :"bird",
    fly(){
        return "Flying high in the skey";
    }
}

const horse:Animal = {
    type:'horse',
    run(){
        return "Running fast";
    }
}

discriminatedUnion(bird);
discriminatedUnion(horse);


