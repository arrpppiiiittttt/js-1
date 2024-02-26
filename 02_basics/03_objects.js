//SINGLETON--when we create object by constructor then result will be singleton(one of a kind)
// when created using literals then object is not singleton

//creation using constructor method
//Object.create

const mySym = Symbol("Key1")
const JsUser ={
    name: "Arpit",
    [mySym]: "Key1",    //for getting value in terms of symbol define in [] otherwise output generated will be of string type
    age: 18,
    location: "Shimla",
    email: "arpit@gmail.com",
    isLoggedIn: false,
    lastLogiDays: ["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);//more preferable
console.log(typeof JsUser["mySym"]);


JsUser.email = "Arpit@google.com"      //for changing or updating the previous values
//Object.freeze(JsUser)    //if we do not want to change the value we freeze thatr object
JsUser.email = "Arpit@chatgpt.com"
console.log(JsUser);


//js functions are treated as variable
JsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello js user{this.name}`);  //using string interpolation , for referencing the already value we use ((this)) value and also use backticks
}
console.log(JsUser.greetingTwo());