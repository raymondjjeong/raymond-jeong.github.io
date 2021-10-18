// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    // Declares and initializes an object that contains the arguments as its values
    var objectToReturn = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };

    return objectToReturn;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // Creates a function that adds contact to the array contacts
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // Declares and initializes an array that contains the names of fullName as its values
            var arrayOfNames = fullName.split(" ");
            
            // Declares and initializes an object that will contain the contact whose name matches fullName
            // if it exists in contacts
            var contactToReturn = undefined;

            // Declares and initializes a counter
            var i = 0;

            // A while loop that iterates through contacts to find whether fullName is in contacts
            // and returns the corresponding contact
            while (i < contacts.length) {
                if (arrayOfNames[0] === contacts[i].nameFirst && arrayOfNames[1] === contacts[i].nameLast) {
                    contactToReturn = contacts[i];
                }
                i++;
            }

            return contactToReturn;
        },
        removeContact: function(contact) {
            
            // A for loop that iterates through contacts to find and delete the inputted contact
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].id === contact.id && contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast) {
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            
            // Declares and initializes an empty string
            var stringToReturn = "";

            // A for loop that iterates through contacts and adds the full name of each contact
            // with a line break to stringToReturn
            // The last name will not contain a line break at its end
            for (var i = 0; i < contacts.length; i++) {
                if (i !== contacts.length - 1) {
                    stringToReturn += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
                } else {
                    stringToReturn += contacts[i].nameFirst + " " + contacts[i].nameLast;
                }
            }

            return stringToReturn;
        }

    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
