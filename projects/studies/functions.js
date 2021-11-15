/**
 * FUNCTIONS
 * 
 * The two phases of a function are declaration and execution.
 */
 function add(x, y) {
    return x + y;
  }
  /**
   * The previous code is a declaration for a function that adds two values.
   */
  
  console.log(add(1, 1));
  /**
   * The previous code executes the function "add." It prints to the console, "2."
   */
  
  /**
   * The parameters of a function are the variable names listed in the function's definition. 
   * In the previous function, x and y are parameters.
   * The arguments of a function are the values that are passed into a function.
   * In the previous call of the function, the values 1 and 1 are arguments.
   */
  
  /**
   * The syntax for a named function is that of the function add that is written previously: function the_name_of_the_function(parameters) {}.
   */
  
  /**
   * A function can be assigned to a variable like the following:
   */
  var addTwoValues = function(x, y) {
    return x + y;
  }
  
  /**
   * Inputs into a function are specified by the parameters that are included in the definition of the function. The output of a function is made with a return statement.
   */
  
  /**
   * Variables declared as parameters or inside functions are in the local scope, while functions have access to the parent or global scope.
   */
  
  var a = 1;
  var b = 2;
  
  function printValues() {
    console.log(a, b);
    var c = 3;
  }
  
  printValues();
  // console.log(c);
  /**
   * The previous code prints, to the console, "1 2." The statement "console.log(c);" causes an error because c is in the local scope of the function printValues.
   */
  
  /**
   * A closure is the situation where an inner function has access to an outer function's variables.
   */
  function outerFunction(x) {
    return function() {
      return x;
    }
  }
  
  var xToReturn = outerFunction(5);
  console.log(xToReturn());
  /**
   * The previous code prints, to the console, "5." The inner function of outerFunction has access to the parameter x.
   */
  