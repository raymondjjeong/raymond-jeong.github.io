/**
 * LOOPS
 * 
 * A loop runs a block of code for a certain number of times or until a condition is broken.
 * In a for loop, a block of code is run a certain number of times. It begins with a variable equaling a starting number, which accumulates by a certain amount after each iteration until it equals the ending number.
 */
 for (var i = 0; i < 5; i++) {
    console.log("This code is printed.");
  }
  /**
   * The previous for loop begins counting at 0 and accumulates by 1 until i equals 5. 
   * Thus, this for loop prints to the console, "This code is printed," five times.
   */
  
  /**
   * A while loop runs a block of code until a condition is broken or as long as a specified condition is true.
   */
  counter = 0;
  
  while (counter < 5) {
    console.log("This code is printed.");
    counter++;
  }
  /**
   * The previous while loop runs its code 5 times. It runs while counter is less than 5, a condition that is broken when counter eventually equals 5.
   */
  
  /**
   * A for in loop iterates through the keys of an object.
   */
  var object = {
    name: "Raymond Jeong",
    age: 29,
    isStudent: true
  };
  
  for (var key in object) {
    console.log(`The property ${key} is paired with the value ${object[key]}.`);
  }
  /**
   * The previous for loop accesses each key and prints the following three statements: "The property name is paired with the value Raymond Jeong. 
   * The property age is paired with the value 29. The property isStudent is paired with the value true."
   */
  
  /**
   * A for loop can be used to iterate through an array's elements, forwards or backwards.
   */
  var array = [0, 1, 2, 3];
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  /**
   * The previous for loop prints to the console, "0 1 2 3." 
   * It loops through the array forwards.
   */
  
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  /**
   * The previous for loop prints to the console, "3 2 1 0." 
   * It loops through the array backwards.
   */