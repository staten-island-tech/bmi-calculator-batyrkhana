function BMICalculate (user_height, user_weight) {
    return (user_weight / (user_height * user_height))*10000
}

const user_name = String(prompt("Please enter your name:"));
const user_height = Number(prompt("Please enter your height in centimeters:"));
const user_weight = Number(prompt("Please enter your weight in kilograms:"));
const BMI = BMICalculate(user_height, user_weight);

function BMIRange(BMI){
    if(BMI <= 18.5){
        return "You are Underweight, consider eating your breakfast, lunch, and dinner.";
    }
    else if(BMI >= 30){
        return "You are in the Obese Range, consider being more thoughtful about your nutrition.";
    }
    else if(BMI >= 18.5 && BMI <= 24.9999){
        return "You are Healthy, keep it up :)";
    }
    else if(BMI <= 29.999 && BMI >= 25){
        return "You are Overweight, change a couple of things and you'll be okay.";
    }
    else{
        return "Error";
    }
}
console.log ("Hello, " + user_name + " Your BMI is: " + BMI + " " + BMIRange(BMI))
/* function getBMI(x,y){
    return 20;
} */
/* // conditional statements if/else if/else
function check(x,y){
    if(x === "horse") {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
//check("horsey")
function complex(x,y){
    if(x === "horse" && y === "horse") {
        console.log("that is true");
    } 
    else {
        console.log("that is false");
    }
}
complex("horse", "horsey");

// check if x is not something

function check(x,y){
    if(x !== "horse") {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
//There will soon be an exam on truth tables
// 2 equal signs == means the value
// 3 equal signs is value and type

function init(){
    y = weight;
    z = height;
    let x = getBMI
} */