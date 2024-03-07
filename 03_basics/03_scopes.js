let a = 10
const b = 20
var c = 30

//{} these are curly braces are reffered to scope
//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "Arpit"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()