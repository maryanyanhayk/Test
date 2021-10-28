const combineTwoStrings = (firstString: string, secondString: string) => {
    return firstString + secondString;
}

combineTwoStrings('TypeScript', ' is a great');

let combinedString = combineTwoStrings("TypeScript", " is a great");

console.log(combinedString);

const multiply = (a: string | number, b: string | number): string => {

    const aNumber = typeof a === 'string' ? parseInt(a) : a;
    const bNumber = typeof b === 'string' ? parseInt(b) : b;

    return String(aNumber * bNumber);
}

console.log(multiply("2","15"));