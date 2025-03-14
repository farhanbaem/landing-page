
// 1. Name the Eight Data Types in JavaScript
// JavaScript has 8 data types:

// String → Text enclosed in quotes (e.g., "Hello" or 'World').
// Number → Numeric values (e.g., 42, 3.14).
// BigInt → Large integers (e.g., 9007199254740991n).
// Boolean → true or false.
// Undefined → A declared variable with no assigned value.
// Null → An intentional absence of value.
// Symbol → A unique identifier (used in complex objects).
// Object → Collections of key-value pairs (e.g., { name: 'John' }).


// 2. Understand the Difference Between Quotes in Strings
// Single quotes (') → Common for plain text.
// Double quotes (") → Common for HTML attributes or JSON.
// Backticks (`) → Enable template literals for dynamic string embedding
let name = "John";
console.log(`Hello, ${name}!`); // Output: Hello, John!


//3. Embed a Variable/Expression in a String
// Use backticks with ${} for embedding:
let x = 5;
let y = 10;
console.log(`The sum is ${x + y}`);

// 4. Understand What a Method Is
// A method is a function that belongs to an object.

let str = "hello";
console.log(str.toUpperCase()); // Output: HELLO


// 5. Name the Three Logical Operators
// && → AND (Both conditions must be true)
// || → OR (At least one condition must be true)
// (!) → NOT (Inverts a boolean value)

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Welcome Admin");
} else {
    console.log("Access Denied"); // Output: Access Denied
}
