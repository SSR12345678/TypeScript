//Union 
//Literal Type
//Type Alias / Surtom Types


//!--------UNION-------------

// function combine(num1 : number | string, num2 : number | string){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         result = num1 +num2;
//     }
//      else{
//         result = num1.toString() + num2.toString(); 
//      }
//      return result;
// }


// const sum = combine(10,20);
// const combineName = combine("Saurabh " , "Rajput");
// console.log(sum, combineName);

//--------Litral Types----------------

// function combine(num1 : number | string, num2 : number | string, conversationType : "as-number" | "as-string"){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"  || conversationType === "as-number"){
//         result = +num1 + +num2;
//     }
//      else{
//         result = num1.toString() + num2.toString(); 
//      }
//      return result;
// }

// const sum1 = combine("10","20", "as-number");
// const sum2 = combine(20,34, "as-number");
// const combineName = combine("Saurabh " , "Rajput", "as-string");
// console.log(sum1, sum2, combineName);







//------------TYPE ALIAS / CUSTOM TYPES-------------------

 type Combinable = number | string;
 type ConversationType = "as-number" | "as-string";

     function combine(num1 : Combinable, num2 : Combinable, conversationType : ConversationType){
        let result;
        if(typeof num1 === "number" && typeof num2 === "number"  || conversationType === "as-number"){
            result = +num1 + +num2;
        }
         else{
            result = num1.toString() + num2.toString(); 
         }
         return result;
    }
    
    const sum1 = combine("10","20", "as-number");
    const sum2 = combine(20,34, "as-number");
    const combineName = combine("Saurabh " , "Rajput", "as-string");
    console.log(sum1, sum2, combineName);


    type User ={
        name : string;
        age : number;
        skills : string[];
    }
    const user : User ={
        name : "Saurabh",
        age : 23,
        skills : ["react", "java"]
    }

    function greet(user:User){
        console.log(`Hi, I am ${user.name}, my age is ${user.age}`);
    }
    greet(user);