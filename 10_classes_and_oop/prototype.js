/*let myName = "Arpit"

console.log(myName.length);
*/

let myHeros= ["thor","spiderman"]
let heroPower= {
    thor :"hammer",
    spiderman :"sling",

    getspiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}
Object.prototype.Arpit=function(){
    console.log(`Hero power in all objects`);
}
Array.prototype.heyArpit=function(){
    console.log(`Arpit says hello`);
}
heroPower.Arpit()
myHeros.Arpit()
myHeros.heyArpit()
//heroPower.heyArpit()            //code failure


///////////////////////////////////////inheritence////////////////////////////////
const user = {
    name:"chai",
    email:"chai@email.com"
}
const teacher = {
    makeVideo: true
}
const teachingSupport={
    isAvailable:false
}
const TASupport ={
    makeassignment: 'js assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

/////////modern proto syntax/////////
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "chai aur code      "
String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is:${this.trim().length}`);
}
anotherUsername.truelength()