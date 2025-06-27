//Function return type

//function First
function add(num1: number, num2 : number) : number{
    return num1 + num2;
}
const res = add(18,2);
console.log(res);

//Function second
function greet(name: string)  {
    console.log(`HI ${name}`);
}
greet("Saurabh");

//CombineFunction

let CombineFunction : (a : number, b : number ) => number; 
CombineFunction = add;
console.log(CombineFunction(100,200));

//Function type  & Collback

//type CB =(n: number) => void 

function addHandle(num1 : number, num2 : number, cb : (n: number) => void){
    const result = num1 + num2;
    cb(result);
}

addHandle (10,30, (result : number)=> {
    console.log(result);
})
