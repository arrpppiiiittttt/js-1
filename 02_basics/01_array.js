const myArr = [1,2,3,4,5]
//js arrays are resizable & contains mix of diff datatypes, not associative ,zero based index
// in js arrays operations create shallow copies means properties share same references
const myheros = ['iron man','spider-man']
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//methods//

myArr.push(6)
console.log(myArr);
// to remove last element from array use pop method
myArr.pop()
console.log(myArr);
// to add element at first position use unshift method
myArr.unshift(9)
console.log(myArr);
//to remove first index element use shift method
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

//join is used to bind the elements and change the datatpe to string
const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);
/*slice returns a piece of the array but it doesn't affect the original array.
 splice changes the original array by removing, replacing, or adding values 
 and returns the affected values.