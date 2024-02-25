const score =100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());

console.log(typeof(balance));
//to fixed is beneficial in e-commerce websites
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

//priority is given to left side of decimal
const otherNumber = 23.42342
console.log(otherNumber.toPrecision(3));

/*localestring is used to read numbers easily 
i.e. it uses commas for eg 1000000000 this no is seperated using commas
default values are usa values
for using indian values we specify as .tolocale string('en-IN') */
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));



