/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
let result = "5" - 2;
console.log("The result is (Before): " + result);


let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!(Before)");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age (Before):" + totalAge);


//Fix Errors Using Explicit Conversions:

 let num1 = "10"; // Originally a string
let num2 = 5;
let sum = Number(num1) + num2; // Explicitly convert num1 to a number
console.log("sum of 10 and 5 is (After):" + sum); // Outputs 15
 
 //Annotate the code
 let booleanValue = "true";
console.log("String to the boolean is (After):"+ Boolean(booleanValue)); // Converts a string to a boolean (true in this case)
// Fix: Used Boolean() for explicit conversion, ensuring the correct type.

//Example of type conversion 
let result1 = "5" * 2; // JavaScript implicitly converts "5" (string) to a number
console.log("Multiplication of 5 and 2 is (After):" + result1); // Outputs 10

//Include one example of explicit type conversion with an edge case:
let input = null;
let convertedInput = String(input); // Converts null to a string
console.log("Explicit type conversion (After):"+convertedInput); // Outputs "null" as a string

 
 