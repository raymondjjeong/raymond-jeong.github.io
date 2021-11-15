/**
 * STRING MANIPULATION
 * 
 * A string can be concatenated with another string by the operator "+." 
 * The assignment operator "+=" can also perform concatenation by attaching the right operand to the left operand.
 * 
 */
 var string1 = "String 1";
 var string2 = "String 2";
 var string3 = string1 + string2; // The variable string3 points to "String1String2" because it is a concatenation of the variables string1 and string2.
 
 string1 += string2; // The variable string1 points to "String1String2" because it is a concatenation of the variables string1 and string2.
 
 /**
  * Strings can also be manipulated by built-in methods. Three of those methods include slice(), substring(), and substr().
  * The method slice() extracts a portion from the string on which it acts. It accepts two arguments, both that are positions within the string on which it is acting. The second position is not included. If only one argument is given, then the rest of the string after that argument is returned. If a negative number is given without a second argument, the method will count from the end of the string.
  */
 var string4 = "012345";
 var slicedString = string4.slice(0, 5); // The variable slicedString points to "01234."
 
 /**
  * The method substring() is similar to slice(), except that it cannot accept negative indices. 
  */
 var substring = string4.substring(0, 5); // The variable substring points to "01234."
 
 /**
  * The method substr() is similar to slice, except that the second argument specifies the length of the extracted string.
  */
 
 var substr = string4.substr(0, 5); // The variable substr points to the string "01234."