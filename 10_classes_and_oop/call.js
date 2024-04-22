function SetUserName(username){
    //compledx db calls
    this.username = username
    console.log("called");
}

function CreateUser(username,email,password){
    SetUserName.call(this, username)                   //this is used for context passing

    this.email = email
    this.password = password
}
const chai = new CreateUser("chai","chai@fb.com","123")
console.log(chai);