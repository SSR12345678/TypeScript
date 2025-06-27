

//----------Unknown-------------
// let userInput : unknown;
// let userName : string;
// let userAge : 21;
// userInput = 10;
// userName = "Patel";
// userAge = userInput; //Not assignable for unknown
// userName = userInput; //Not assignable for unknown

//--------Any-----------

let userInput : any;
let userName : string;
let userAge : 21;
userInput = 10;
userName = "Patel";
userAge = userInput; // able to assign
userName = userInput; // able to assign

//----------Never return tyoe-----------

function generateError(message: string, code : number) : never {
    throw{message : message, statusCode :code}
}

const result = generateError("internal Server error",  500);
console.log(result);

