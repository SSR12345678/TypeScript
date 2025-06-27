//Function return type
//function First
function add(num1, num2) {
    return num1 + num2;
}
var res = add(18, 2);
console.log(res);
//Function second
function greet(name) {
    console.log("HI ".concat(name));
}
greet("Saurabh");
//CombineFunction
var CombineFunction;
CombineFunction = add;
console.log(CombineFunction(100, 200));
//Function type  & Collback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 30, function (result) {
    console.log(result);
});
