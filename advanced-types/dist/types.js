"use strict";
const mohammed = {
    name: "Mohammed",
    startDate: new Date(),
    privileges: ["Create-User"]
};
function printEmployeeInfo(employee) {
    console.log(employee.name);
    if ('privileges' in employee) {
        console.log(employee.privileges);
    }
    if ('startDate' in employee) {
        console.log(employee.startDate);
    }
}
printEmployeeInfo(mohammed);
const ahmed = { name: "Ahmed", startDate: new Date() };
printEmployeeInfo(ahmed);
class Car {
    start() {
        console.log("Start engine");
    }
    drive() {
        console.log("Start driving journey");
    }
}
class Truck {
    start() {
        console.log("Start all engines");
    }
    loadCargo() {
        console.log("Loading cargo");
    }
    drive() {
        console.log("Drive cargo");
    }
}
function printVechileInfo(vechile) {
    vechile.start();
    if (vechile instanceof Truck) {
        vechile.loadCargo();
    }
    vechile.drive();
}
const BMW = new Car;
const tructory = new Truck;
printVechileInfo(BMW);
printVechileInfo(tructory);
function discriminatedUnion(animal) {
    switch (animal.type) {
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
const bird = {
    type: "bird",
    fly() {
        return "Flying high in the skey";
    }
};
const horse = {
    type: 'horse',
    run() {
        return "Running fast";
    }
};
discriminatedUnion(bird);
discriminatedUnion(horse);
