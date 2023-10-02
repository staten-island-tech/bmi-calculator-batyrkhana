// we can pass in arguments or parameters
// whatever you write in the test() does not matter
function test(mess) {
    console.log("mess");
}
//run the function, you can have strings numbers and booleons variables
test("Ashton"); 

//String ""
const x = "String";
//declaring a variable, defining a variable
test(x);

//Number/Integer
const y = 98;
test(y);

//Boolean true or falce 
const z = true;
test(z);

function add(num1, num2) {
    console.log(num1 + num2);
}

let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
//if you add 2 strings together, it combines them into a single string
add(35, 34);
const sum = add(1,2);
console.log(sum);

function calc(){
    const sum = add(35,34);
    console.log(sum);
}
calc();
