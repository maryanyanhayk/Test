
interface FruitInformation{
    name: string;
    color: 'orange' | 'green' | 'red' | 'yellow';
    type: string;
    origin: string | null | undefined;
}

interface FruitInformationWithPips extends FruitInformation{
    seedCount: number;
}

const appleInformation: FruitInformationWithPips = {
    name: 'Apple',
    color: 'red',
    type: 'fruit',
    seedCount: 8,
    origin: null
}

const bananaInformation: FruitInformationWithPips = {
  name: "Banana",
  color: "yellow",
  type: "fruit",
  seedCount: 0,
  origin: 'Armenia'
}

const orangeInformation: FruitInformationWithPips = {
  name: "Orange",
  color: "orange",
  type: "fruit",
  seedCount: 4,
  origin: undefined
}





