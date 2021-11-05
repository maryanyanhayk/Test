
interface BakeryItem{
    name: string;
    numberInStock: number;
    ingredients: string[];
    price: number;
}


const myBakeryItem: BakeryItem = {
    name: 'Red Velvet Cake',
    numberInStock: 1,
    ingredients: ['eggs','milk','sugar','flour','food colouring'],
    price: 200
}

interface FruitInfo{
    name: string;
    color: 'orange' | 'green';    
}

const appleInfo: FruitInfo = {
    name: 'apple',
    color: 'green'
} 

const orangeInfo: FruitInfo = {
    name: 'Orange',
    color: 'orange'
}

const prearInfo: FruitInfo = {
    name: 'Pear',
    color: 'green'
}

const pearColor = prearInfo.color;

interface FruitInfoWithPips extends  FruitInfo {
    pipCount: number;
}

const watermelons: FruitInfoWithPips = {
    pipCount: 10,
    name: 'Watermelon',
    color: 'green'
}
