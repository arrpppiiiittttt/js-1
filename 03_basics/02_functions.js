// infinite add items to cart eg shopping app 
/*
function CalculateCartPrice(...num1) {                      //rest operator => add all spreaded items into bundel and return
    return num1
}
console.log(CalculateCartPrice(200,400,500));
*/
/*
function CalculateCartPrice(val1,val2,...num1) {                      //rest operator => add all spreaded items into bundel and return
    return num1
}
console.log(CalculateCartPrice(200,400,500,200));
*/

const user = {
    username:"Arpit",
    price: 999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

const myNewArray = [200,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));