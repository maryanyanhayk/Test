enum BakeryItemType{
    Cake,
    Bread,
    Other,
}

interface BakeryItemPrototype{
    name: string;
    description?: string;
    imageURL?: string;
    numberInStock: number;
    type: BakeryItemType;
    price: number;
}

const donut: BakeryItemPrototype = {
    name: "Donut",    
    description: 'This donut has really vibrant pink frosting on it which makes it taste better!',
    numberInStock: 10,
    type: BakeryItemType.Cake,
    price: 10,
};