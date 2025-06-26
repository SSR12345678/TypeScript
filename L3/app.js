//Union 
//Literal Type
//Type Alias / Surtom Types
function combine(num1, num2, conversationType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversationType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number");
var sum2 = combine(20, 34, "as-number");
var combineName = combine("Saurabh ", "Rajput", "as-string");
console.log(sum1, sum2, combineName);
var user = {
    name: "Saurabh",
    age: 23,
    skills: ["react", "java"]
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name, ", my age is ").concat(user.age));
}
greet(user);
