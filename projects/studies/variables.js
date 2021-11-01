/**
 * Variables are containers that points to values of any data type. The program in which the variables are located then use the values according to its purpose.
 * 
 * Variables are created in two steps: declaration and initialization. To declare a variable, one must use the keyword var and then give the variable a name. To initialize the variable, one must assign a value to the variable with an equals sign. If a variable is declared without an assignment, it is undefined.
 * 
 * A variable declared with var and let can be reassigned to values different from the previous values.
 */


 // 1. Declaration and Assignment
 var myName = "Raymond Jeong" // The string "Raymond Jeong" is assigned to the variable myName.
console.log(myName); // This statement prints to the console, "Raymond Jeong."

 /** 2. var, let, const
  * A variable declared with the keyword var has global scope outside of functions but has local scope within functions. 
  * The same variable can be declared again by using the keyword var. Such a variable can be reassigned.
  * 
  * A variable declared with let cannot be redeclared. It can be reassigned, and it has block scope.
  * 
  * A variable declared with const cannot be redeclared or reassigned.
  */
  var num = 1; // The variable num is declared with var and points to the value 1, a number.
  let boolean = true; // The variable boolean points to the value true, a boolean.
  const string = "String" // The variable string points to the value "String," a string.

  /** Hoisting is the process through which variable declarations are brought to the top of the scope 
   * before the program executes. When hoisted, declarations using var are initialized with a default value of undefined. 
   * When hoisted, declarations using let and const are not initialized.
   * */