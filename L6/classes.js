"use strict";
//---BasicClass----
// class Department {
//     name : string;
//     constructor(n:string){
//          this.name =n;
//     }
//     describe(){
//         console.log("Department", this.name)
//     }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// const accountingCopy = {
//     name : "Dummy",
//     describe : accounting.describe
// }
//  accountingCopy.describe();
//------private, public access modifire-----
// class Department {
//    public name : string;
//    private employees : string[];
//    // constructor(public name : String, private employees : string[]){} //shortend property
//     constructor(n:string){
//          this.name =n;
//          this.employees = [];
//     }
//     describe(){
//         console.log("Department", this.name)
//     }
//     addEmployee(emp : string){
//         this.employees.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log("Nombar of Employee : " + this.employees.length);
//         console.log(this.employees);
//     }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// accounting.addEmployee("Saurabh");
// accounting.addEmployee("Shivam");
// accounting.printEmployeeInformation();
// readonly, public , private 
// class Department {
//     public name : string;
//     private employees : string[];
//     private readonly id : string;
//     // constructor(public name : String, private employees : string[]){} //shortend property
//      constructor(n:string){
//           this.name =n;
//           this.employees = [];
//           this.id ="d1"; // only once we can initialize (readonly)
//      }
//      describe(){
//          console.log("Department", this.name)
//      }
//      addEmployee(emp : string){
//          this.employees.push(emp);
//      }
//      printEmployeeInformation(){
//          console.log("Nombar of Employee : " + this.employees.length);
//          console.log(this.employees);
//      }
//  }
//-------------inheritance- protected method, override property--------------
class Department {
    // constructor(public name : String, private employees : string[]){} //shortend property
    constructor(id, n) {
        this.name = n;
        this.id = "d1";
        this.employees = [];
    }
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Nombar of Employee : " + this.employees.length);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    //    reports : string[] =[];
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(emp) {
        if (emp === "Saurabh") {
            return;
        }
        else {
            this.employees.push(emp);
        }
    }
    get getReports() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Report not Found");
    }
    set setReports(value) {
        if (!value) {
            throw new Error("Please pass valid value");
        }
        this.reports.push(value);
    }
}
const accDep = new AccountingDepartment("d1", []);
accDep.describe();
accDep.addReports("Bugs");
accDep.printReports();
accDep.addEmployee("Saurabh");
accDep.addEmployee("Rajput");
accDep.printEmployeeInformation();
//Setter and Getter
console.log("Getter : ", accDep.getReports);
accDep.setReports = "Shivam";
console.log("Getter : ", accDep.getReports);
//-------Static Methos---------
class Department2 {
    // constructor(public name : String, private employees : string[]){} //shortend property
    constructor(id, n) {
        this.name = n;
        this.id = "d1";
        this.employees = [];
    }
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Nombar of Employee : " + this.employees.length);
        console.log(this.employees);
    }
    static getSalary() {
        return { salary: 500000 };
    }
}
const salary = Department2.getSalary(); // without creating object, we can call it by class name
console.log(salary);
//------------abstract classes---------
class Department3 {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
}
class Subclass extends Department3 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    describe() {
        console.log("Department3", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
const res = new Subclass("D3", []);
res.describe();
