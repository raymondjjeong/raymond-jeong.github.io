/**
 * CONTROL FLOW
 * 
 * Control flow is the order in which the statements of a program are executed by a computer.
 * Code is run in the order of the first line to the last line, unless the flow is affected by structures like conditional statements and loops.
 * Conditional statements control the flow of a program. They can form a chain that begins with an if statement, followed by an else-if statement (or a series of else-if statements) and an else statement.
 * There can be multiple if statements in a row that do not form a chain because each one's conditional can resolve to true, making each if statement's block of code run. On the other hand,
 * an if-else if-else chain executes the first block of code whose conditional resolves to true and skips the other statements in the chain. In that sort of chain, the else statement runs if all if and else-if statements' conditionals resolved to false.
 * 
 */
if (1 < 2) {
  console.log("This first if statement's block of code runs.");
}

if (2 < 3) {
  console.log("This second if statement's block of code runs.");
}
/**
 * Because the conditionals of both previous if statements resolve to true, both of their blocks of code run. Those two if statements do not form a chain,
 * unlike the code that is right below.
 */


if (2 < 1) {
  console.log("This first block of code runs.");
} else if (false) {
  console.log("This second block of code runs.");
} else {
  console.log("This third block of code runs.");
}
/**
 * Because the conditional statement of the if block is false, its code block doesn't run. 
 * Since the if statement resolves to false, the else-if statement runs but resolves to false, so its code block doesn't run.
 * If the if statement's or any else-if statement's conditional resolved to true, then the rest of the chain is skipped, even if another subsequent else-if statement's conditional resolves to true.
 * The else statement runs because all the previous statements resolved to false, printing to the console, "This third block of code runs."
 */

/**
 * A switch statement executes a block of code based on whether an expression matches a case. The block of code in that case is run. 
 * In each case, a break must be provided so that the next block of code doesn't run.
 * If none of the cases match the expression, then the default's block of code is run.
 */
var color = "red";

switch (color) {
  case "red":
    console.log("The color is red.");
    break;
  case "blue":
    console.log("The color is blue.");
    break;
  case "green":
    console.log("The color is green.");
    break;
  default:
    console.log("The color is not recognized.");
}
/**
 * The previous swtich statement matches the expression "color" to the case "red," because the variable color points to "red."
 * Thus, this switch statement prints to the console, "The color is red."
 */