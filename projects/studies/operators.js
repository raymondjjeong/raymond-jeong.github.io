/**
 * OPERATORS
 * 
 * 1. Assignment Operators
 * An assignment operator assigns the value of its right operand to the left operand.
 */
 var x = 1; // The assignment operator "=" assigns the value 1 to x.
 x += 2; // The addition assignment operator "+=" adds 2 to x, which now equals 3.
 x -= 1; // The subtraction assignment operator "-=" subtracts 1 from x, which now equals 2.
 x *= 2; // The multiplication assignment operator "*=" multiplies x by 2 and assigns the product to x, which now equals 4.
 x /= 2; // The division assignment operator "/=" divides x by 2 and assigns the quotient to x, which now equals 2.
 x %= 1; // The remainder assignment operator "%=" finds the remainder of x divided by 1, making x equal 0.
 x **= 2; // The exponentiation assignment operator exponentiates x by 2, making x = 0.
 
 /**
  * 2. Comparison Operators
  * A comparison operator compares its operands and, based on the comparison, returns true or false.
  */
 var boolean = 1 == "1"; // The variable boolean points to true because the comparison operator "==" returns true if the operands are equal.
 boolean = 1 != "1"; // The variable boolean points to false because the comparison operator "!=" returns false if the operands are equal but true if the operands are not equal.
 boolean = 1 === "1"; // The variable boolean points to false because the comparison operator "===" returns false because it returns true if the operands are equal and of the same data type.
 boolean = 1 !== "1"; // The variable boolean points to true because the comparison operator "!==" returns true if the operands are not equal and/or of different type.
 boolean = 2 > 1; // The variable boolean points to true because the comparison operator ">" returns true if the left operand is greater than the right operand.
 boolean = 1 < 2; // The variable boolean points to true because the comparison operator "<" returns true if the left operand is less than the right operand.
 boolean = 1 >= 1; // The variable boolean points to true because the comparison operator ">=" returns true if the left operand is greater than or equal to the right operand.
 boolean = 1 <= 1; // The variable boolean points to true because the comparison operator "<=" returns true if the left operand is less than or equal to the right operand.
 
 /**
  * 3. Arithmetic Operators
  * An arithmetic operator takes numerical values (either variables or literal numbers) as their operands, performs a mathematical operation based on the operator, and returns the result of the performed operation.
  */
 var y = 1 + 1; // The arithmetic operator "+" is for addition. The variable y equals 2.
 y = y - 0; // The arithmetic operator "-" is for subtraction. The variable y equals 2.
 y = 2 * 2; // The arithmetic operator "*" is for multiplication. The variable y equals 4.
 y = y / 2; // The arithmetic operator "/" is for division. The variable y equals 2.
 y = y % 2; // The arithmetic operator "%" is for finding the remainder of dividing the left operand by the right operand. The variable y equals 0.
 y = 3 ** 2; // The arithmetic operator "**" is for exponentiation. The variable y equals 9.
 
 /**
  * 4. Logical Operators
  * The logical operators include "&&," "||," and "!." They are used with expressions that compare their operands.
  * The "AND" operator "&&" requires that both expressions are true so that the entire expression returns true.
  * The "OR" operator "||" requires that only one of the expressions is true so that the entire expression returns true.
  * The "NOT" operator "!" returns the opposite of whether an expression is true or false.
  */  
 var boolean2 = 1 === 1 && 2 === 2; // The variable boolean2 points to true because both expressions surrounding the "AND" operator are true.
 boolean2 = 1 === 1 || 2 < 1; // The variable boolean2 points to true because one of the expressions surrounding the "OR" operator is true.
 boolean2 = !(1 > 2); // The variable boolean2 points to true because 1 is not greater than 2, a fact that normally would return false since ">" is used and 1 is on the left, but the "NOT" operator returns the opposite value.
 
 /**
  * 5. Unary Operators
  * A unary operator has only one operand. Unary operators include "!," "typeof," and "-."
  * The unary operator "!" returns the opposite of the truthiness of a value.
  * The operator "typeof" returns the data type of a value in a string.
  * The operator "-" returns the opposite of a value according to its sign, whether it is positive or negative.
  */
 var value = !(null); // The variable value points to true because null is a falsy value.
 value = typeof []; // The variable value points to "object" because the operator typeof is acting on an array.
 value = -5; // The variable value points to -5 because the operator "-" negates positive numbers and makes negative numbers positive.
 
 /**
  * 6. Ternary Operators
  * The conditional operator is the only operator that is ternary, meaning that it takes three operands. Using it composes the following format: condition ? line1 : line2. If condition is true, line1 is run; otherwise, line2 is run.
  */
 var value1 = (1 < 2) ? 1 : 2; // The variable value1 points to 1 because (1 < 2) returns true.