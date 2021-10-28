"use strict";
var myAnyVariable;
myAnyVariable = "Hello World";
myAnyVariable = 1;
myAnyVariable = {
    greeting: "hello there"
};
var property = myAnyVariable.doesNotExists;
myAnyVariable.sayHello();
var myUnknownVariable;
myUnknownVariable = 1;
myUnknownVariable = {
    greeting: "Hello there"
};
// const propertyUnknown = myUnknownVariable.doesNotExist;
// myUnknownVariable.sayHello();
