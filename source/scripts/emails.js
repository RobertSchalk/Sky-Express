const path = require('path'); // Used for book marks. Joins a path and file location
const jsonfile = require('jsonfile'); // To allow the communication between the .json files.
const uuid= require("uuid"); // Helps create ids for bookmarks.

//handles bookmarks
//creating the Bookmark class
var Email = function (id, carrier, email, password) {
    this.id = id;
    this.carrier = carrier;
    this.email = email;
    this.Password = password;
}

//place holder to create div that the user can click to switch 
//between emails.
/*
Email.prototype.Create = function () {
    
}*/

module.exports = Email;
