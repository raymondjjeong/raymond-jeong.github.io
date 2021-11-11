/**
 * DATA TYPES
 * 
 * 1. The data type number represents both integers and floating-point numbers. 
 * There are arithmetic operations that can be performed on numbers, including addition, subtraction, and multiplication.
 */
 var num = 1; // A statement that declares the variable num and assigns 1 to it.
 console.log(num); // This statement prints the value of num (1) to the console.
 
 /**
  * 2. A string is a data type that must be surrounded by quotation marks, either double or single, or backticks. 
  * Textual data can be stored as a string. 
  * In using backticks, we are allowed to embed expressions or variables into the string by wrapping them in ${...}.
  */
 var usingSingleQuotes = 'This string is created by using single quotes.'; // A string created by using single quotes.
 var usingDoubleQuotes = "This string is created by using double quotes."; // A string created by using double quotes.
 var usingBackTicks = `This string is created by using backticks.`; // A string created by using backticks.
 
 /**
  * 3. The data type boolean has two values: true and false.
  * It is useful for controlling the flow of a program.
  * Boolean values can be created by comparisons.
  * 
  */
 var boolean = 3 > 1; // The variable boolean will point to the boolean value true.
 if (boolean) {
   console.log("The variable boolean is true.");
 } // The variable boolean points to true, executing the code block within the if statement, printing, "The variable boolean is true," to the console.
 
 /**
  * An array is a complex data type. It is a collection that is an ordered list whose indices begin at 0.
  * An array can store any type of data, including objects and other arrays.
  */
 var arr = [1, 2, true, "This value is located in an array", {}, [3, 4]]; // The variable arr is an array that contains numbers, a boolean, a string, an object, and another array of numbers.
 
 /**
  * An object is a complex data type. It holds properties (or keys) that point to values of any data type, including an array or another object.
  * An object's keys and their values are known as key/value pairs.
  */
 var myself = {
   name: "Raymond Jeong",
   age: 29,
   hobbies: ["Filmmaking", "Creative Writing", "Reading", "Poker"],
   location: "Baton Rouge",
   isStudent: true
 }; // The variable myself is an object that contains multiple key/value pairs, including the key "name," whose value is "Raymond Jeong."
 
 /**
  * There is no data type "function," but when typeof is called on a function or a variable that points to a function, it returns, "function," even though a function is an object.
  * A function is a block of reusable code that executes a particular task.
  */
 var func = function() {
   console.log("The variable func is a function.");
 } // This statement is an expression of a function, in which a function is assigned to the variable func.
 console.log(typeof func); // This statement prints, to the console, "function."
 
 /**
  * A variable that has not been assigned a value is of the type undefined.
  */
 var undefinedVariable; // This statement declares but does not assign the variable undefinedVariable. Currently, undefinedVariable points to undefined.
 console.log(undefinedVariable); // This statement prints, to the console, "undefined."
 
 /**
  * The value null represents an object that has no value.
  */
 var object = null; // The variable object points to a value of null.
 
 /**
  * NaN is the value that represents, "Not a Number." This property indicates that a value is not a legal number.
  */
 var notANumber = 1 * "string"; // The variable notANumber equals NaN because a number cannot be multiplied by a string.
 console.log(notANumber); // This statement prints, to the console, "NaN."
 
 /**
  * The value Infinity represents positive infinity. It is displayed when a number exceeds the maximum floating point number. 
  * -Infinity represents negative infinity. It is displayed when a number is lower than the minimum floating point number.
  */
 var maxedNumber = Math.pow(10, 1000); // The variable maxedNumber exceeds the upper limit of a floating point number.
 console.log(maxedNumber); // This statement prints, to the console, "Infinity."
 
 /**
  * A simple data type is one that is not an object and has no methods. It is for a variable that holds a single value. A complex data type is an object and has built-in methods. It is for a variable that holds multiple values. 
  */
 var aNumber = 10; // The variable aNumber points to the number 10, which is a simple data type.
 var anArray = [0, 1, 2, 3]; // The variable anArray points to an array of values, which is a complex data type.
 
 /**
  * When values are passed into a function by copy, the original values are not changed when the function manipulates the copies. 
  * When values are passed into a function by reference, the original values are changed when the function manipulates the references.
  */
 var x = 10;
 
 function add10(num) {
   return num + 10;
 }
 
 console.log(add10(x)); // This statement prints, to the console, 20.
 
 console.log(x); // This statement prints, to the console, 10, because x does not change after it was passed into the function add10.
 
 var arr1 = [0, 1, 2];
 
 function push3(array) {
   array.push(3);
 }
 
 push3(arr1);
 
 console.log(arr1); // This statement prints, to the console, [0, 1, 2, 3] because arr1 is changed by push3 when it is passed into push3.