const arrayOfStringsAndNumbers: (string | number)[] = [];

arrayOfStringsAndNumbers.push(1);

const firstItemArray = arrayOfStringsAndNumbers[0];

const stringAndNumber: [string, number] = ["apple",500];

const firstItemInTuple = stringAndNumber[0];

for(let data of stringAndNumber){
    console.log(data);
}


