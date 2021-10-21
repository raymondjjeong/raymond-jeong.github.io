/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animalsArray, nameToSearch) {
    for (var i = 0; i < animalsArray.length; i++) {
        if (animalsArray[i] !== null && animalsArray[i].name.toLowerCase() === nameToSearch.toLowerCase()) {
            return animalsArray[i];
        }
    }

    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i] !== null && animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i] !== null && animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    
    var uniqueName = true;
    var i = 0;
    
    if (animal.name.length > 0 && animal.species.length > 0) {
       while (uniqueName === true && i < animals.length) {
           if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
               uniqueName = false;
           }
           i++;
       }

       if (uniqueName === true) {
           animals.push(animal);
       }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
