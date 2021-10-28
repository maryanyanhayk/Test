type StringOrNumber = string | number;
type StockCount = number;

let numberOfItemsInStock: StockCount = 500;
let numberOfShortsInStock: StockCount = 200;
let numberOfJacketsInStock: StockCount = 100;

let typesCityPopulation: string | number | boolean = 3000000;
typesCityPopulation = "Three million";

type Shirt = {
    name: string;
    namberInStock: number;
}

let myNewShirt: Shirt = {
  name: "Cool Red Shirt",
  namberInStock: 100
}

console.log(myNewShirt.name);
console.log(myNewShirt.namberInStock);