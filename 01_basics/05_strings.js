const name="Arpit"
const repo=12

console.log(name+ repo+ "Value")

//2nd method => with string interpolation and with backticks//
console.log(`Hello my name is ${name} and my repocount is ${repo}`)

////////////////
const gamename= new String('hitesh-hc')

console.log(gamename[0]);
console.log(gamename[2]);
console.log(gamename.__proto__);              //to get object call//then perform methods or functions over string//
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


//substring//here we cannot give -ve values
const newString = gamename.substring(0,4)
console.log(newString);

//slice// here we can also give -ve values , then it will start calculate from back
const anotherString = gamename.slice(-8,4)
console.log(anotherString);

//trim// to remove extra white spaces
const newString1 = " AAAAAAAAaaaa    "
console.log(newString1);
console.log(newString1.trim());

//url 
const url = "https://fluffy-space-cod-pvq64pq6xr4cr496.github.dev/"
console.log(url.replace('space','*****'));
console.log(url.includes('github'));
console.log(url.includes('appu'));