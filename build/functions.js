"use strict";
var combineTwoStrings = function (firstString, secondString) {
    return firstString + secondString;
};
combineTwoStrings('TypeScript', ' is a great');
var combinedString = combineTwoStrings("TypeScript", " is a great");
console.log(combinedString);
var multiply = function (a, b) {
    var aNumber = typeof a === 'string' ? parseInt(a) : a;
    var bNumber = typeof b === 'string' ? parseInt(b) : b;
    return String(aNumber * bNumber);
};
console.log(multiply("2", "15"));
