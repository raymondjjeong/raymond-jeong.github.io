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

var femaleCount = function (array) {
    var numOfFemales = _.reduce(array, function(prevValue, currentCustomer, index) {
        if (currentCustomer.gender === "female") {
            prevValue += 1;

            return prevValue;
        }
    }, 0);

    return numOfFemales;
};

var oldestCustomer = function (customers) {
    var oldestPerson = customers[0];
    
    for (var i = 0; i < customers.length; i++) {
        if (customers[i].age > oldestPerson.age) {
            oldestPerson = customers[i];
        }
    }

    return oldestPerson.name;
};

var youngestCustomer = function (customers) {
    var youngestPerson = customers[0];
    
    for (var i = 0; i < customers.length; i++) {
        if (customers[i].age < youngestPerson.age) {
            youngestPerson = customers[i];
        }
    }

    return youngestPerson.name;
};;

var averageBalance = function (customers) {
    var totalBalance = 0;
    var averageBalance;

    for (var i = 0; i < customers.length; i++) {
        totalBalance += customers[i].balance;
    }

    averageBalance = totalBalance / customers.length;

    return averageBalance;
};

var firstLetterCount = function (customers, letter) {
    var numOfNames = 0;

    for (var i = 0; i < customers.length; i++) {
        if (customers[i].name[0].toLowerCase() === letter.toLowerCase()) {
            numOfNames += 1;
        }
    }

    return numOfNames;
};

var friendFirstLetterCount = function (customers, customer, letter) {
    var customerExists = false;
    var numOfFriends = 0;
    
    for (var i = 0; i < customers.length; i++) {
        if (customers[i].name.toLowerCase() === customer.name.toLowerCase()) {
            customerExists = true;
        }
    }

    if (customerExists) {
        for (var i = 0; i < customer.friends.length; i++) {
            if (customer.friends[i].name[0].toLowerCase() === letter.toLowerCase()) {
                numOfFriends++;
            }
        }
    }

    return numOfFriends;
};

var friendsCount = function (customers, name) {
    var customersWithFriend = [];
    
    for (var i = 0; i < customers.length; i++) {
        for (var j = 0; j < customers[i].friends.length; j++) {
            if (customers[i].friends[j].name.toLowerCase() === name.toLowerCase()) {
                customersWithFriend.push(customers[i].friends[j]);
            }
        }
    }

    return customersWithFriend;
};



var topThreeTags;

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
