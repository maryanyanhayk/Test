"use strict";
var BakeryItemType;
(function (BakeryItemType) {
    BakeryItemType[BakeryItemType["Cake"] = 0] = "Cake";
    BakeryItemType[BakeryItemType["Bread"] = 1] = "Bread";
    BakeryItemType[BakeryItemType["Other"] = 2] = "Other";
})(BakeryItemType || (BakeryItemType = {}));
var donut = {
    name: "Donut",
    description: 'This donut has really vibrant pink frosting on it which makes it taste better!',
    numberInStock: 10,
    type: BakeryItemType.Cake,
    price: 10,
};
