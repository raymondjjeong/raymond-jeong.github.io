//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var stringToReturn = "";
    var arrayOfKeys = Object.keys(object);

    for (var i = 0; i < arrayOfKeys.length; i++) {
        if (i !== arrayOfKeys.length - 1) {
            stringToReturn += arrayOfKeys[i] + " ";
        } else {
            stringToReturn += arrayOfKeys[i];
        }
    }

    return stringToReturn;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var stringToReturn = "";
    var arrayOfValues = [];

    for (var key in object) {
        if (typeof object[key] === "string") {
            arrayOfValues.push(object[key]);
        }
    }

    stringToReturn = arrayOfValues.join(" ");

    return stringToReturn;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
    } else if (typeof collection === "object") {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var stringToReturn = "";

    stringToReturn += string[0].toUpperCase();

    for (var i = 1; i < string.length; i++) {
        stringToReturn += string[i];
    }

    return stringToReturn;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arrayOfWords = string.split(" ");

    for (var i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = capitalizeWord(arrayOfWords[i]);
    }

    return arrayOfWords.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.hasOwnProperty("noises") === true) {
        if (object.noises.length !== 0) {
            return object.noises.join(" ");
        } else {
            return "there are no noises";
        }
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arrayOfWords = string.split(" ");

    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].toLowerCase() === word.toLowerCase()) {
            return true;
        }
    }

    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);

    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty("friends") === true) {
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i].toLowerCase() === name.toLowerCase()) {
                return true;
            }
        }
    }

    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
    var arrayToReturn = [];
    
    for (i = 0; i < array.length; i++) {
        if (array[i].name !== name) {
            if (isFriend(name, array[i]) === false) {
                arrayToReturn.push(array[i].name);
            }
        }
    }

    return arrayToReturn;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if (object.hasOwnProperty(key) === true) {
        object[key] = value;
    } else {
        object[key] = value;
    }

    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        delete object[array[i]];
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var arrayToReturn = [];
    
    for (var i = 0; i < array.length; i++) {
        var noDuplicate = true;
        var alreadyExists = false;

        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                noDuplicate = false;
            }
        }

        for (var k = 0; k < arrayToReturn.length; k++) {
            if (array[i] === arrayToReturn[k]) {
                alreadyExists = true;
            }
        }

        if (noDuplicate === true && alreadyExists === false) {
            arrayToReturn.push(array[i]);
        }
    }

    return arrayToReturn;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}