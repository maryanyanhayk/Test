
let unionCityPopulation: string | number | boolean = 3000000;

unionCityPopulation = "Three million";
unionCityPopulation = true;

if(typeof unionCityPopulation === 'string'){
    console.log(unionCityPopulation);
}
else if(typeof unionCityPopulation === 'number'){
    unionCityPopulation = unionCityPopulation + 100;
}
