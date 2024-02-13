const accountID = 144553
let accountEmail = "arpit@gmail.com"
var accountPassword ="12345"
accountCity ="Shimla"
let accountState
//accountID=2// not allowed

accountEmail = "HArry@gmail.com"
accountPassword = "33443"
accountCity = "Una"

console.log(accountID);

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
