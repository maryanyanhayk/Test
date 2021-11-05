enum BakeryItemType {
  Cake,
  Bread,
  Other,
}

interface BakeryItemPrototype {
  name: string;
  description?: string;
  imageURL?: string;
  numberInStock: number;
  type: BakeryItemType;
  price: number;
}

const donut: BakeryItemPrototype = {
  name: "Donut",
  description:
    "This donut has really vibrant pink frosting on it which makes it taste better!",
  numberInStock: 10,
  type: BakeryItemType.Cake,
  price: 10,
};

interface PaymentMethod {
  id: string;
  currency: "gbp" | "amd" | "aud" | "eur" | "usd";
  abailableBalance: number;
}

interface CreditCardPaymentMethod extends PaymentMethod {
  expiryDate: Date;
  type: "credit" | "debit";
  cardValid: boolean;
}

type CashpaymentMethod = PaymentMethod;

const myPaymentMethod: CreditCardPaymentMethod = {
  id: "my-default-payment-method",
  currency: "eur",
  abailableBalance: 50,
  expiryDate: new Date(),
  type: "credit",
  cardValid: true,
};

const myBuckupPaymentMethod: CashpaymentMethod = {
  id: "my-backup-payment-method",
  currency: "usd",
  abailableBalance: 2000,
};

interface Customer {
  id: string;
  primaryPaymethod: CashpaymentMethod | CreditCardPaymentMethod;
  backupPaymentMethod: CashpaymentMethod | CreditCardPaymentMethod;
  itemsInBasket: BakeryItem[];
}

const customer: Customer = {
  id: "my-first-customer",
  primaryPaymethod: myPaymentMethod,
  backupPaymentMethod: myBuckupPaymentMethod,
  itemsInBasket: [],
};

//Making a Payment

const makePayment = (paymentMethod: PaymentMethod, amount: number) => {
  if (paymentMethod.abailableBalance < amount)
    throw new Error("Payment method does not have sufficient funds.");

  console.log("Payment was taken successfully.");
};

//Buying a Bakery Item

const payForItemsInBasket = (customer: Customer) => {
  customer.itemsInBasket.forEach((BakeryItem) => {
    try {
      makePayment(customer.primaryPaymethod, BakeryItem.price);
      BakeryItem.numberInStock -= 1;
    } catch (e) {
      console.log("Error encountered whilst making paymenbt. Details: ", e);
    }
  });
};

payForItemsInBasket(customer);
