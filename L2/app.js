// Object, Array, Tuple, Enum
//---------OBJECT-------------
// const person1 : {
//     firstName : string;
//     age : number;
//     address : {
//         myAddress : String;
//     }
// } = {
//    firstName : "Saurabh",
//    age : 22,
//    address : {
//     myAddress : "Firozabad"
//    }
// };
// console.log(person1.address);
//-------ARRAY------------
// const person : {
//     firstName : string;
//     age : number;
//     skills : string[];
// } = {
//    firstName : "Saurabh",
//    age : 22,
//    skills : ["JAva", "TypeScript"]
// };
// console.log(person.firstName);
// console.log(person);
// let languageKnown1 : string[];
// languageKnown1 = ["Hindi", "English"]
// let languageKnown2 : any[];// avoid to using this
// languageKnown2 = ["Hindi", "English" , 10, true]
//---------Tuple------------
// const person : {
//     name : string;
//     age : number;
//     skills : string[];
//     product : [number, string]
// }  ={
//     name : "Saurabh",
//     age :33,
//     skills : ["reactjs", "java"],
//     product : [10, "iphone"], 
// }
// //person.product[1] = 20; //invalid
// person.product[0] = 20;  // valid
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: "Saurabh",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Iphone"],
    role: Role.AUTHOR,
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
