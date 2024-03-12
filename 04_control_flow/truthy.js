const userEmail = "appu@gmail.com"
if (userEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have User Email");
}
/*
falsy values

false, 0 , -0, BigInt 0n, "", null, undefined, NaN

Truthy values
except falsy values , "0", "False", " "(string with space value) (all values which comes with string format)
[], {}, function(){}
*/


const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

///////////Nullish Coalescing operator (??): null undefined///////////////////////////////////////
let val1;
//val1 = 5??10
//val1 = null?? 10
//val1 = undefined ??15
val1 = null?? 10?? 20              // in this special case , first value approached will be chosen
console.log(val1);

///////////////Terniary Operator //////////////////////////////////////////////////////////////
//consition ? True : False

const iceteaprice = 100
iceteaprice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");