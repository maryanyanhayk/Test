"use strict";
var CoffeeType;
(function (CoffeeType) {
    CoffeeType[CoffeeType["Americano"] = 0] = "Americano";
    CoffeeType[CoffeeType["Cappucino"] = 1] = "Cappucino";
    CoffeeType[CoffeeType["Frappucino"] = 2] = "Frappucino";
    CoffeeType[CoffeeType["Espresso"] = 3] = "Espresso";
    CoffeeType[CoffeeType["Mocha"] = 4] = "Mocha";
})(CoffeeType || (CoffeeType = {}));
var myFavouriteCoffeeType;
myFavouriteCoffeeType = CoffeeType.Espresso;
switch (myFavouriteCoffeeType) {
    case CoffeeType.Americano:
        console.log("I love an Americano coffee.");
        break;
    case CoffeeType.Cappucino:
        console.log("I love an Cappucino coffee.");
        break;
    case CoffeeType.Frappucino:
        console.log("I love an Frappucino coffee.");
        break;
    case CoffeeType.Espresso:
        console.log("I love an Espresso coffee.");
        break;
    case CoffeeType.Mocha:
        console.log("I love an Mocha coffee");
        break;
    default:
        console.log("All coffee are great !");
        break;
}
var ElementType;
(function (ElementType) {
    ElementType["Earth"] = "brown";
    ElementType["Wind"] = "gray";
    ElementType["Water"] = "blue";
    ElementType["Fire"] = "red";
})(ElementType || (ElementType = {}));
var myFavouriteElementType = ElementType.Fire;
myFavouriteElementType = ElementType.Water;
var isWaterMyFavoouriteType = myFavouriteElementType === ElementType.Water;
var myFavouriteColor = "blue";
switch (myFavouriteColor) {
    case ElementType.Water:
        console.log("Water match my favourite color");
        break;
    default:
        console.log("This element type does not my much my favourite color");
        break;
}
