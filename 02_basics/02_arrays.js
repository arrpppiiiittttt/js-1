const marvel_heros = ["thor","iron man","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//this will generate output array under array
//console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//spread operator
const all_new_heros =  [ ...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Arpit"));
//to check wheather it is an array or not
console.log(Array.from("Arpit"));
//for array conversion
console.log(Array.from({name:"Arpit"}));
//here,we have to specify to convert keys or value other it will print empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));