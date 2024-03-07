
function sayMyName (){                                                    //function defining
    console.log("A");                                   
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
    
}
//sayMyName()                                                               //function calling for output

/*
function addTwoNumbers(Number1, Number2){
    console.log(Number1+Number2);
}

//addTwoNumbers(3,4)                                      //takes 3 & 4 as input and add to produce output
//addTwoNumbers(3,"4")      
//addTwoNumbers(3,a)                                                              
//addTwoNumbers(3,null)           
const result = addTwoNumbers(3,5)                          //for storing output as result 
console.log("Result:",result);
*/

/*

function addTwoNumbers(Number1, Number2){
    let result = Number1+Number2;
    return result
}
const result = addTwoNumbers(3,5)
//console.log("Result:", result);                                 //return k baad function kaam nhi karta so,after result log does not print
*/

/*
function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("Hitesh"));
//console.log(loginUserMessage());// if we does not pass any value, then result will be undefined
*/
function loginUserMessage(username) {
    if(username=== undefined){
        console.log("Please enter a username");
    }
    
}
console.log(loginUserMessage());

// ! this symbol converts true to false & false to true eg. !username means username not defined or exist