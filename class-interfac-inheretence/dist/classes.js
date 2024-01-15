"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log("Describe department: ", `${this.id}, ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    employeeInformation() {
        console.log(this.employees);
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
class ITDepartment extends Department {
    static incrementInstanceCouter() {
        this.instanceCount++;
    }
    static get getInstanceCount() {
        return this.instanceCount;
    }
    description() {
        console.log("It is a very important department");
    }
    constructor(id, admins) {
        super(id, "IT department");
        this.admins = admins;
        ITDepartment.incrementInstanceCouter();
    }
    adminsInformation() {
        console.log(this.admins);
    }
    addEmployee(employee) {
        super.addEmployee("it:" + employee);
    }
}
ITDepartment.instanceCount = 0;
let itDepartment = new ITDepartment("1", ["Jawhar", "Gawhar"]);
itDepartment.describe();
itDepartment.addEmployee("Mohammed");
itDepartment.addEmployee("Ahmed");
itDepartment.employeeInformation();
itDepartment.adminsInformation();
console.log(itDepartment.getName, itDepartment.getId);
itDepartment.setName = "IT";
console.log(itDepartment.getName, itDepartment.getId);
let networkDepartment = new ITDepartment("3", ["Shafiq"]);
let networkDepartment3 = new ITDepartment("3", ["Shafiq"]);
itDepartment.description();
console.log("InstanceNumber of it: ", ITDepartment.getInstanceCount);
