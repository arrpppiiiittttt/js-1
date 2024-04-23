const newHero = ["hulk","spiderman"]
//js behaviour is prototypal behaviour
//everything in js is object

function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2
console.log(multiplyby5(3));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
//this is used for setting current context
function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment= function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()

