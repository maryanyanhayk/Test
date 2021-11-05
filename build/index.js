"use strict";
var BakeryItemType;
(function (BakeryItemType) {
    BakeryItemType[BakeryItemType["Cake"] = 0] = "Cake";
    BakeryItemType[BakeryItemType["Bread"] = 1] = "Bread";
    BakeryItemType[BakeryItemType["Other"] = 2] = "Other";
})(BakeryItemType || (BakeryItemType = {}));
var donut = {
    name: "Donut",
    description: "This donut has really vibrant pink frosting on it which makes it taste better!",
    numberInStock: 10,
    type: BakeryItemType.Cake,
    price: 10,
};
var myPaymentMethod = {
    id: "my-default-payment-method",
    currency: "eur",
    abailableBalance: 50,
    expiryDate: new Date(),
    type: "credit",
    cardValid: true,
};
var myBuckupPaymentMethod = {
    id: "my-backup-payment-method",
    currency: "usd",
    abailableBalance: 2000,
};
var customer = {
    id: "my-first-customer",
    primaryPaymethod: myPaymentMethod,
    backupPaymentMethod: myBuckupPaymentMethod,
    itemsInBasket: [],
};
//Making a Payment
var makePayment = function (paymentMethod, amount) {
    if (paymentMethod.abailableBalance < amount)
        throw new Error("Payment method does not have sufficient funds.");
    console.log("Payment was taken successfully.");
};
//Buying a Bakery Item
var payForItemsInBasket = function (customer) {
    customer.itemsInBasket.forEach(function (BakeryItem) {
        try {
            makePayment(customer.primaryPaymethod, BakeryItem.price);
            BakeryItem.numberInStock -= 1;
        }
        catch (e) {
            console.log("Error encountered whilst making paymenbt. Details: ", e);
        }
    });
};
payForItemsInBasket(customer);
