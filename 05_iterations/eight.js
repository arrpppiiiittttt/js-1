//The reduce() method executes a reducer function for array element.

//The reduce() method returns a single value: the function's accumulated result.

//The reduce() method does not execute the function for empty array elements.

//The reduce() method does not change the original array.
/*
const mynums = [1,2,3]
const mytotal = mynums.reduce(function(acc,currval){
    console.log(`accumulator:${acc} and currentvalue:${currval}`);
    return acc + currval
},0)
console.log(mytotal);
*/
const mynums = [1,2,3]
const mytotal = mynums.reduce((acc,curr)=> acc + curr,0)
console.log(mytotal);