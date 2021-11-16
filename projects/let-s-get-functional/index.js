// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./raymond-jeong.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function (customer, index, arr) { 
        return customer.gender === "male";
    });

    return males.length;
};

var femaleCount = function (customers) {
    var numOfFemales = _.reduce(customers, function(prevValue, currentCustomer, index) {
        if (currentCustomer.gender === "female") {
            prevValue += 1;

            return prevValue;
        } else {
            return prevValue;
        }
    }, 0);

    return numOfFemales;
};

var oldestCustomer = function (customers) {
    var oldestPerson = _.reduce(customers, function (previous, current, index) {
        if (previous.age < current.age) {
            return current;
        } else {
            return previous;
        }
    }, customers[0]);

    return oldestPerson.name;
};

var youngestCustomer = function (customers) {
    var youngestPerson = _.reduce(customers, function (previous, current, index) {
        if (previous.age < current.age) {
            return previous;
        } else {
            return current;
        }
    }, customers[0]);

    return youngestPerson.name;
};

var averageBalance = function (customers) {
    var totalOfBalances = 0;
    
    totalOfBalances = _.reduce(customers, function(prevValue, currentObject, i) {
        prevValue += currentObject.balance;

        return prevValue;
    }, 0);

    return (totalOfBalances / customers.length);
};

var firstLetterCount = function (array, letter) {
    var customersWithLetter = _.filter(array, function(currentCustomer, index, array) {
        if (currentCustomer.name[0].toLowerCase() === letter.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    });

    return customersWithLetter.length;
}

var friendFirstLetterCount = function (customers, customer, letter) {
    var friendsWithLetter = [];
    var indexOfCustomer;

    for (var i = 0; i < customers.length; i++) {
        if (customers[i].name.toLowerCase() === customer.toLowerCase()) {
            indexOfCustomer = i;
        }
    }

    friendsWithLetter = _.filter(customers[indexOfCustomer].friends, 
        function(friend, index, customers) {
            if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
                return true;
            } else {
                return false;
            }
        });

    return friendsWithLetter.length;
};

var friendsCount = function (customers, nameToSearch) {
    var arrayOfCustomers = [];
    
    var arrayOfObjects = _.filter(customers, function(customer, index, customers) {
        for (var i = 0; i < customer.friends.length; i++) {
            if (customer.friends[i].name === nameToSearch) {
                return true;
            }
        }

        return false;
    });

    arrayOfCustomers = _.map(arrayOfObjects, function(customer, index, customers) {
        return customer.name;
    });

    return arrayOfCustomers;
}

var topThreeTags = function(customers) {
    var arrayToCheck = [];
    var collectionOfTags = {};
};



var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
