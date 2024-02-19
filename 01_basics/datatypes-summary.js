// primitive datatypes
/* 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt */

//Non-primitive (Reference)
/* Arrays, Objects, Functions */

/*arrrays => 
const heros = ["Ironman","Spiderman","Hulk"]
*/

/* objects=>
let obj={
    name:"Arpit"
    age:"19"
}
*/

/* function=>
const myFunction = function(){
    console.log("Hello World")
}
*/

// stack => primitive 
// Heap => non-primitive

let myname = "arpit"

let anothername =myname
anothername ="appu"

console.log(myname);
console.log(anothername);

let userOne = {
    email:"user@gmail.com"

}

let usertwo = userOne

usertwo.email = "appu@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);