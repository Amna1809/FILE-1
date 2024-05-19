/********Assignment # 1*************
******Calculator********
HTML.......
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Calculator</title>
     <link rel="stylesheet" href="cal.css">
</head>
<body>
     <div class="calculator">
          <input type="text" placeholder="0" id="inputBox"> 
          <div>
               <button class="operator">AC</button>
               <button class="operator">DEL</button>
               <button class="operator">%</button>
               <button class="operator">/</button>
          </div>
          <div>
               <button>7</button>
               <button>8</button>
               <button>9</button>  
               <button class="operator">*</button>
          </div>
          <div>
               <button>4</button>
               <button>5</button>
               <button>6</button>
               <button class="operator">-</button>
          </div>
          <div>
               <button>1</button>
               <button>2</button>
               <button>3</button>
               <button class="operator">+</button>
          </div>
          <div>
               <button>00</button>
               <button>0</button>
               <button>.</button>
               <button class="equalBtn">=</button>
          </div>
     </div>

     
     
     
     <script src="Cal.js "></script>
</body>
</html>
CSS......
*{
     margin: 0%;
     padding: 0%;
     box-sizing: border-box;
     font-family: 'Poppins' , sans-serif ;
}

body
{
     width: 100%;
     height: 100vh; 
     display: flex;
     justify-content: center;
     align-items: center;
     background: linear-gradient(150deg, #0a0a0a, #3a4452);

}
.calculator
{
     border: 1px solid rgb(186, 186, 186);
     padding: 5%;
     border-radius: 100px;
     background: transparent;
     box-shadow: 0px 3px 15px rgba(113, 115, 119, 0.5 );
}
input
{
     width: 100%;
     border: none;
     padding: 10px;
     margin: 20px;
     background: transparent;
     box-shadow: 0px 3px 15px rgba(84, 84, 84, 0.1);
     font-size: 60px;
     text-align: right ;
     cursor: pointer;
     color: #ffffff; 
}
input::placeholder
{
     color: #ffffff;    
}

button
{
     border: none;
     width: 150px;
     height: 150px;
     margin: 20px;
     border-radius: 50%;
     background: transparent;
     color: #ffffff ;
     font-size: 80px;
     box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.1);
     cursor: pointer;
}
.equalBtn
{
     background-color: #f2af79;
}
.operator
{
     color:#449c01;
}
 // Prompt the user for the first number
let firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number
let secondNumber = parseFloat(prompt("Enter the second number:"));

// Calculate and display the sum
let sum = firstNumber + secondNumber;
alert("Sum: " + sum);

// Calculate and display the difference
let difference = firstNumber - secondNumber;
alert("Difference: " + difference);

// Calculate and display the product
let product = firstNumber * secondNumber;
alert("Product: " + product);

// Check if the second number is not zero before performing division
if (secondNumber !== 0) {
    // Calculate and display the quotient
    let quotient = firstNumber / secondNumber;
    alert("Quotient: " + quotient);
} else {
    alert("Cannot divide by zero!");
}





*******Assignment # 2 *************
******Average age of student****************

let totalAge = 0;
let numberOfstudents = 10;

// Loop to prompt the user for the age of each student
for (let i = 1; i <= 10; i++) {
    let age = +(prompt("Enter the age of student " + i  +":"));
    
    // Add the age to the total
    totalAge += age;
}

// Calculate the average age
let averageAge = totalAge / 10;

// Display the average age
alert("The average age of the class is: " + averageAge.toFixed(2));


***********Assignment # 3**********

*************Area of Circle*************

// Prompt the user to enter radius of circle 
let radiusOfCircle = parseInt(prompt("Please enter the radius of Circle: "));
// Calculating diameter , area and circumference
let Area = Math.PI * radiusOfCircle ** 2; 
let Diameter = 2 * radiusOfCircle;
let Circumference = 2 * Math.PI * radiusOfCircle;

// Display area , circumference, diameter
console.log("Area of Circle:" + Area ) ;
console.log("Diameter of Circle is:" + Diameter);
console.log("Circumference of Circle is:" + Circumference);


**************Assignment # 4 ****************

************Shopkeeper announcement***************

// Prompt the user to enter the amount of bill
let customersBill = parseFloat(prompt("Please Enter the amount of your bill:"));

// Discount Based on amount of bill
let discount = 0 ;
if (customersBill > 5000){
    discount = 0.15;// 15% bill amount is greater then 5000
}
else
{
   discount = 0.10; // 10% bill amount is less then 5000
}
// Calculate payeable amount after applying discount 

let payableAmount = customersBill - (customersBill * discount);

// Displaying Payable Amount on screen 
console.log(`Bill Amount: $${customersBill.toFixed(2)}`);
console.log(`Discount Applied: ${discount * 100}%`);
console.log(`Payable Amount: $${payableAmount.toFixed(2)}`);


***************Assignment no 5**************

***********BMI (Body Mass Index)**********

// prompt user to enter height in inches
let heightInInches = parseFloat(prompt("Please Enter your height in inches!"));
let weightInPounds = parseFloat(prompt("Please enter your weight in pounds!"));
// Calculating the BMI formula 
let bmi = (weightInPounds * 703) / (heightInInches*heightInInches);
// applying conditions
let category = ""; 
if (bmi < 16.0) {
    category= ("Severely Underweight");
}
else if (bmi >=16.0 && bmi <= 18.4){
    category= ("Underweight");
}
else if (bmi >=18.5 && bmi <= 24.9){
    category= ("Normal");
}
else if (bmi >=25.0 && bmi <= 29.9){
    category= ("Overweight");
}
else if (bmi >=30.0 && bmi <= 34.9){
    category= ("Moderately Obese");
}
else if (bmi >=35.0 && bmi <= 39.9){
    category= ("Severely Obese");
}
else 
{
   category= ("Morbidly Obese");
}
 // Display BMI and category
 //console.log("Your BMI is: " + bmi.toFixed(1) + "\nCategory: " + category);
 // Output a message with the calculated BMI and category
console.log(`Your BMI is: ${bmi.toFixed(2)}`);
console.log(`BMI Category: ${category}`);


**********Assignment no 6**************

**************Making of keyless Car!****************

// prompt user for their age 
let yourAge = + (prompt("Please enter your Age:"));
//applying condition 
if (yourAge < 18 ){
  alert("Sorry! you are too young to drive this car.Powering off."); 
}
else if (yourAge === 18){
    alert("Congratulations on your first year of driving. Enjoy your ride.");
}
else
{
    alert("Powering On. Enjoy your ride.")
}

************Assignment no. 7*********************

***********Shopping Cart*********

// printing "banner " to welcome user on shop
console.log("WELCOME to our Shop");

// prompt the name of item they are buying 
let nameOfItem = parseInt(prompt("Please enter the name of your item "));

//prompt the user for price of that item
let priceOfItem = +prompt("Please enter the price of the item");

// prompt the user for quantity of that item 
let quantityOfItem = +prompt("Please enter the quantity of the item ");

// calculating subtotal
let subtotal = (quantityOfItem * priceOfItem);

// printing the output of that includes subtotal
console.log("Your subtotal is:"  + subtotal);


**************Assignment no 8*****************

**************Tweet checker***********

let tweet = prompt('Please enter your tweet:');

    let count = tweet.length;
    if (count <= 140){
        console.log("That "  +(count)  +" character tweet will work!");
    }
    else {
        console.log("Your " +(count) +" character tweet will "  +(count-140)  +" characters long!");
    }

*******************Assignment no 9**************
************Digits That print on display screen*******

//prompt user to enter four digit integer
let inputNumber = (prompt("Please enter any four consecutive number:"));
// checking validity of the entered integers 
if (inputNumber.length !== 4 || isNaN (inputNumber)){
    console.log("Invalid input. Please enter a four-digit number.");
}
else{
    // convert input into number and extract digits
    let number = parseInt(inputNumber);
    let digit4 = number % 10;
    let digit3 = Math.floor(number / 10) % 10;
    let digit2 = Math.floor(number / 100) % 10;
    let digit1 = Math.floor(number / 1000);

    // displaying sepertely
    console.log(digit4);
    console.log(digit3);
    console.log(digit2);
    console.log(digit1);
}


**********Assignment no. 10*******************

**********Temperature Precautions *******************


// prompt user for today's temperature
let temp = parseInt(prompt("Please Enter the temprature of today"));
// checking the conditions 

if (temp > 30){
    console.log("Don't forget the factor 50!");
}
else if(temp < 10){
    console.log("Wear a jacket today!");
}
else {
    console.log("It's a T-shirt kind of day!");
}

*************Assignment no 11************

***********FIZZ BUZZ!!!!******************

// using for loop for iteration

for (let num = 1; num <= 100; num++) {
    // checking if number is divisible by both 3 and 5
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz!");
    }
    // checking if number is divisible by 3
    else if (num % 3 === 0) {
        console.log("Fizz!");
    }
    // checking if number is divisible by 5
    else if (num % 5 === 0) {
        console.log("Buzz!");
    }
    else {
        console.log(num);
    }
}


******************Assignment no 12***************

**********Using function for printing color of shirt **************

// let color = + prompt("enter your color");
function colorMsg(favoriteColor, shirtColor){
    if (favoriteColor === shirtColor){
      return"The shirt is your favorite color!";
    }
    else{
        return "That is a nice color";
    }
}
// using of function
let msg1 = colorMsg("blue", "blue");
console.log(msg1); // "The shirt is your favorite color!"

let msg2 = colorMsg("Red", "Green");
console.log(msg2); // "That is a nice color!"

function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
        return "The shirt is your favorite color!";
    } else {
        return "That is a nice color.";
    }
}

// Example using function
var favoriteColor = "blue";
var shirtColor = "blue";
console.log(colorMessage(favoriteColor, shirtColor)); // display "The shirt is your favorite color!"

favoriteColor = "green";
shirtColor = "red";
console.log(colorMessage(favoriteColor, shirtColor)); // Display "That is a nice color."


************Assignment no 13**************

************use function to configure even odd and returns true false**************


function  isEven(num) {
    return num % 2 === 0 ;
}
// function eg.
console.log(isEven(12)); // true
console.log(isEven(69)); // false

***********Assignmnet no 14**************

********Capitalizing of letters**********

function capitalize(str) {
    // checking whether the string is empty or not
    if (str === '') {
        return '';
    } 
    // capitalizing first letter and concatenate with rest
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// function using  example
console.log(capitalize('eggplant'));
console.log(capitalize('amna'));


************Assignment no 15********

************Multiply Function************

function multiply(num1, num2) {
    return num1 * num2;
}
//using function 
let result = multiply(5, 8);
console.log(result); // 40

*********Assignment no 16************
**************Life phase *************

function lifePhase(age) {
      if (age < 0 || age > 140) {
        return "This is not a valid age";
      }    else if (age >= 0 && age <= 3 ) {
        return "Infant";
      }  else if (age >= 4 && age <= 12 ) {
        return "Child";
      }  else if (age >= 13 && age <= 19 ) {
        return "Teen";
      }  else if (age >= 20 && age <= 64 ) {
        return "Adult";
      }  else {
        return "Senior citizen";
      }
}

// calling function
console.log(lifePhase(22)); // Display "Adult"
console.log(lifePhase(90)); // Display "Senior citizen"
console.log(lifePhase(33)); // Display "Teen"
console.log(lifePhase(3)); // Display "Infant"


**********Assignment no 17**********
********Grade of Student**************

function finalGrade(grade1, grade2, grade3) {
    if (grade1 < 0 || grade2 < 0 || grade3 < 0){
        return "You have entered an invalid grade!";
    }
    let average = (grade1 + grade2 + grade3) / 3;
    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80 && average <= 89) {
        return "B";
    } else if (average >= 70 && average <= 79) {
        return "C";
    } else if (average >= 60 && average <= 69){
        return "D";
    } else {
        return "F"
    }
}

// calling function
console.log(finalGrade(96, 94, 95));
console.log(finalGrade(-15, 65, 7564));
console.log(finalGrade(0, 30, 45));


**********Assignment no 19************
*******Reversing of array ***************

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Calling function
let realArray = [10, 9, 8, 7, 5];
let reversed = reverseArray(realArray);
console.log(reversed); 
*/