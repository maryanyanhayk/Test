enum CoffeeType {
  Americano,
  Cappucino,
  Frappucino,
  Espresso,
  Mocha,
}

let myFavouriteCoffeeType: any;
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

enum ElementType {
  Earth = "brown",
  Wind = "gray",
  Water = "blue",
  Fire = "red",
}

let myFavouriteElementType: ElementType = ElementType.Fire;

myFavouriteElementType = ElementType.Water;

const isWaterMyFavoouriteType: boolean =
  myFavouriteElementType === ElementType.Water;

let myFavouriteColor = "blue";

switch (myFavouriteColor) {
  case ElementType.Water:
    console.log("Water match my favourite color");
    break;
  default:
    console.log("This element type does not my much my favourite color");
    break;
}
