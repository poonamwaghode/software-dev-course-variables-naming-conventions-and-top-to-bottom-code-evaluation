/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let userName = "Alice";
let numberofItem1 = 5;
let numberofItem2 = 20;
let newItem = 5;
let totalCost = numberofItem1 + numberofItem2;
let newTotalCost= numberofItem1 + numberofItem2 + newItem ;
let userMessage = userName + " bought two items for  " + numberofItem1 + numberofItem2 + "each. so total cost of two item is "+ totalCost + "$.";
let newMessage = userName + " bought one more item for " + newItem + " $ so, new total cost is" + newTotalCost + "$.";

console.log(userMessage);
console.log(newMessage);


let x = 10;
let y = 20;
let z = x + y;
console.log(z);

// Rewrite code
let firstNumber = 10; // Clearer name that indicates this is the first number.
let secondNumber = 20; // Indicates this is the second number being used.
let sumOfNumbers = firstNumber + secondNumber; // Descriptive variable name that shows the purpose.
console.log(sumOfNumbers); // Outputs the sum of the two numbers.
