//fetch('https://something.com').then().catch().finally()
/*
The Promise object represents the eventual completion (or failure) of an asynchronous
 operation and its resulting value.
 */
/*
const promiseOne = new Promise(function(resolve,reject){
    //Do any async task
    //Db calls,cryptography,network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
*/
/*
new promiseOne(function(resolve,reject){
    setTimeout(function(){
        console.log("ASYNC TASK 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})
*/
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"email@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false//true(for error)
        if(! error){
            resolve({username:"Arpit",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true//(for error)
        if(! error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()
async function getAllUsers(){
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers