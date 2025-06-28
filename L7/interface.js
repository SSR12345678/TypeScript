"use strict";
//------- Interface-------------
let user;
user = {
    name: "Saurabh",
    age: 21,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
};
console.log(user);
user.greet("Greet is here");
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text}, ${this.name}`);
    }
}
const p1 = new Person("Saurabh");
p1.greet("Hi there I am");
class Person1 {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text} , ${this.name}`);
    }
}
let user1;
user1 = new Person("Patel");
console.log(user1);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 50));
class Person2 {
    constructor(n) {
        this.name = n;
    }
}
