console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);


console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
/*here results are not predictable bcz equality check== and comparisons ><>=<= work differently
comparisons convert null to a number,treating it as a 0.
that's why (3)null>=0 is true and (1)null>0is false.*/

console.log(undefined == 0);
console.log(undefined >  0);
console.log(undefined < 0);
// in case of undefined all results are false//


// strict check === it not only checks equality but also checks datatype//
console.log("2"===2);