// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // A for loop that iterates through each element of the inputted array 
  // and prints it to the console
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  // A for loop that iterates through an array in reverse order and prints each element in each iteration
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare and initalize an empty array
  var array = [];

  // A for loop that iterates through each key of the inputted object
  // and pushes it into array
  for (var key in object) {
    array.push(key);
  }

  // Returns array with the keys of the inputted object as its values
  return array;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // A for loop that prints each key of the inputted object
  for (var key in object) {
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare and initalize an empty array
  var array = [];

  // A for loop that iterates through an object's keys
  // and pushes their values into array
  for (var key in object) {
    array.push(object[key]);
  }
  
  // Returns array whose values are the inputted object's values
  return array;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // A for loop that iterates through the inputted object
  // and prints its values
  for (var key in object) {
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare and initalize a variable that will count the number of key/value pairs in the inputted object
  var count = 0;

  // A for loop that iterates through the inputted object
  // and adds 1 to count for each key/value pair
  for (var key in object) {
    count += 1;
  }

  // Returns count, which equals the number of key/value pairs in object
  return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare and initalize an empty array into which the values of the inputted object will be stored
  var array = [];

  // A for loop that iterates through all of the keys in the inputted object
  // and pushes the values of those keys into array
  for (var key in object) {
    array.push(object[key]);
  }

  // A for loop that prints the values in array in reverse order
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
