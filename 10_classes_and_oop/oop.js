const user = {
    username : "ARPIT",
    logincount : 9,
    signedIn: true,

    getuserdetails: function(){
        //console.log("Got user details from database");
        console.log(`username : ${this.username}`);
    }
}
//console.log(user.username)
//console.log(user.getuserdetails());



//constructor function
//it allows us to create multiple instances from single object literal
//const promiseOne = new Promise()
//const date = new Date()

function User(username,logincount,isloggedin){
    this.username= username,
    this.logincount= logincount;
    this.isloggedin= isloggedin
    return this
}

const userOne = User("ARPIT",12,true)
const uderTwo = User("HITESH",11,false)//this will create overwrite problem over userOne// therefore to resolve this problem we use new keyword (new userTwo)
console.log(userOne);
console.log(userTwo);