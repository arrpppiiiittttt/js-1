let myDate = new Date()
console.log(myDate);

let myDate1 = new Date()
console.log(myDate1.toString());
console.log(myDate1.toDateString());
console.log(myDate1.toISOString());
console.log(myDate1.toJSON());
console.log(myDate1.toLocaleDateString());
console.log(myDate1.toTimeString());
//date is an object in js
//months are started from 0 as january in js when we write in single digits as arrays
//& in case of YYYY-MM--DD or MM-DD-YYYY starts from 1 onwards as january
let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date("02-25-2024")
console.log(myCreateDate1.toLocaleString());


let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreateDate.getTime());
// Date.now will provide value in miliseconds ,
//for further conversion into seconds dib=vide the value by 1000 and to remove decimal answer use math.floor
console.log((Math.floor(Date.now()/1000)));

//for extracting single value
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());