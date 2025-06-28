//------- Interface-------------

interface Person {
    name :string;
    age :number;
    greet(text : string) : void;
}

let user : Person;
user = {
    name : "Saurabh",
    age : 21,
    greet(text) : void {
        console.log(`${text} ${this.name}`);
        
    }, 
}

console.log(user);
user.greet("Greet is here")


//------------

interface Greetable {
    name :string;
    greet(text : string) : void;
}

class Person implements Greetable{
     name : string;
    constructor(n :string){
        this.name =  n;
    }
    greet(text : string) : void{
        console.log(`${text}, ${this.name}`);
        
    }
}

const p1 = new Person("Saurabh");
p1.greet("Hi there I am");

//--------readonly-----------

interface Named{
    readonly name : string;
}

interface Greetable extends Named {
      greet(text :string) : void;
}

class Person1 implements Greetable{
    name : string;
    constructor(n : string){
        this.name = n ;
    }
    greet(text : string) : void {
        console.log(`${text} , ${this.name}`);
        
    }
}

let user1 : Greetable;
user1 = new Person("Patel");
console.log(user1);

//---------------

//  type addFun = (a:number, b : number) => number;

 interface addFun{
        (a:number, b :number) : number;
 }
 let add : addFun;

 add = (n1 : number, n2 : number) =>{
    return n1 + n2;
 }
 console.log(add(10, 50));
 

 //---------optional(?)-----------
interface Named{
 readonly name : string;
 outputName ? : string;
}

class Person2 implements Named{
   name : string;
   constructor(n : string){
       this.name = n;
   }
}