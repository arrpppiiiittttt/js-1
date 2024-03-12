// if
/*
if(false){

}
// if true then execute otherwise false and code does not execute//

//<,>,<=,>=,==,!=,===

const temperature = 41

if(temperature<50){
    console.log("less than 50");
}
else{
console.log("temperature is greater than 50");
}

console.log("Execute");
*/

// scope example
/*
const score = 200

if(score>100){
    const power = "Fly"
    console.log(`user power:${power}`);
}
console.log(`user power:${power}`);// outside of scope
*/
/*
const balance = 1000

if (balance<500){
    console.log("Less than 500");    
} else if (balance<750){
    console.log("Less than 750");
}else if (balance<900){
    console.log("Less than 900");
}else{
    console.log("Less than 1200");
}
*/

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard){     // if any of the condition is false then result is not generated
    console.log("Allow to buy Course");
}
if (LoggedInFromGoogle || LoggedInFromEmail){    // for checking multiple conditions
    console.log("User Logged In");
}