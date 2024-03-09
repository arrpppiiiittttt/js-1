/* this in js ************************************************************/
const user = {
    username: "Arpit",
    price : 999,

    WelcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website`);// this is used to refer current context
        console.log(this);
    }

}
//user.WelcomeMessage()
//user.username = "Sam" // here,we changed the username value
//user.WelcomeMessage()
//node environment refers to empty object
//console.log(this);

// in browser global object is window
/*
function chai() {
    let username="Hitesh"
    console.log(this);
    console.log(this.username);// this will give undefined
}
chai()
*/
/************************Arrow function*********************************/
/*just replace function by =>*/
const chai = () => {
    let username = "Arpit"
    console.log(this);
}

chai()

/*
syntax:
*/
/*
const addtwo = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo(3,4));
*/
//implicit return syntax//
const addtwo = (num1,num2) =>  (num1 + num2)

console.log(addtwo(3,4))

// with curly braces return keyword is must//