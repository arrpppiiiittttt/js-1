//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sunny"
tinderuser.loggedIn = false

//console.log(tinderuser);

const regularuser = {
    email: "aaaaaaa@gmail.com",
    fullname: {
        username:{
            firstname:"Arpit",
            lastname:"Dhiman"
        }
    }
}
//console.log(regularuser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = object.assign({},obj1,obj2)/////// here {} is used as target code and rest elements are treated as source
const obj3 = {...obj1,...obj2} //maximumly used syntax
//console.log(obj3);

//when data comes from database, it is in the form of array of objects
const users = [
    {

    },
    {

    },
]
/*
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('isLogged'));
*/
const course = {
    course_name: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor} = course   // use of curly braces{} is for object destructuring

console.log(courseInstructor);

//if name is not declared then it is an API otherwise an object
//both keys and values are treated as strings
{
    "name" :"Arpit",
    "coursename": "JS",
    "price" :"999"

}