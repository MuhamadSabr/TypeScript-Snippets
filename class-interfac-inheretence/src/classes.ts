abstract class Department{
    // private  id : string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id:string, private name:string){
        this.name = name;
        this.id   = id;
    }

    describe(this: Department){
        console.log("Describe department: " , `${this.id}, ${this.name}`);
    }

    abstract description():void;

    public addEmployee(employee:string){
        this.employees.push(employee);
    }

    public employeeInformation(){
        console.log(this.employees);
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    set setName(name:string){
        this.name = name;
    }
}

class ITDepartment extends Department{

    private static instanceCount:number=0;

    private static incrementInstanceCouter(){
        this.instanceCount++;
    }

    static get getInstanceCount(): number{
        return this.instanceCount;
    }

    description(): void {
        console.log("It is a very important department");
    }

    constructor(id:string, private admins:string[]){
        super(id, "IT department");
        ITDepartment.incrementInstanceCouter();
    }

    adminsInformation(){
        console.log(this.admins);
    }

    public addEmployee(employee: string): void {
        super.addEmployee("it:" + employee);
    }


}

let itDepartment = new ITDepartment("1", ["Jawhar", "Gawhar"]);
itDepartment.describe();
itDepartment.addEmployee("Mohammed");
itDepartment.addEmployee("Ahmed");
itDepartment.employeeInformation();
itDepartment.adminsInformation();
console.log(itDepartment.getName, itDepartment.getId);
itDepartment.setName = "IT";
console.log(itDepartment.getName, itDepartment.getId);

let networkDepartment = new ITDepartment( "3", ["Shafiq"]);
let networkDepartment3 = new ITDepartment( "3", ["Shafiq"]);

itDepartment.description();
console.log("InstanceNumber of it: ", ITDepartment.getInstanceCount);