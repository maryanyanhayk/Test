let myAnyVariable: any;

myAnyVariable = "Hello World";

myAnyVariable = 1;

myAnyVariable = {
    greeting: "hello there"
}

const property = myAnyVariable.doesNotExists;
myAnyVariable.sayHello();

let myUnknownVariable: unknown;
myUnknownVariable = 1;
myUnknownVariable = {
    greeting: "Hello there"
}

// const propertyUnknown = myUnknownVariable.doesNotExist;

// myUnknownVariable.sayHello();