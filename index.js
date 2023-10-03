function BMICalculator (user_height_meters, user_weight) {
    return (user_weight / (user_height_meters)^2)
}
let user_height = Number(prompt("Please enter your height in centimeters:"))
let user_weight = Number(prompt("Please enter your weight in kilograms:"))