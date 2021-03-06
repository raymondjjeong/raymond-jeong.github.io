/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { get } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "Koala";
animal["name"] = "Koalie";
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = "Bellow";

noises.push("Grunt");

noises.unshift("Growl");

noises[noises.length] = "Sniffle";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
animal.noises.push("Groan");

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Dot notation and bracket notation
 *  A for-in loop
 * 2. What are the different ways of accessing elements on arrays?
 *  Bracket notation
 *  A loop
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
  species: "Duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};

animals.push(duck);

console.log(animals);

var animal3 = {
  species: "Tiger",
  name: "Tigger",
  noises: ["Growl", "Purr"]
};

var animal4 = {
  species: "Wolf",
  name: "Wolfie",
  noises: ["Bark", "Woof"]
};

animals.push(animal3);
animals.push(animal4);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// An array could hold a list of friends. An array is appropriate because it is a collection.

var friends = [];

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}

friends.push(animals[getRandom(animals)].name);

console.log(friends);

animals[getRandom(animals)]["friends"] = friends;

console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}