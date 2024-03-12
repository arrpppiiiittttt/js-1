/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month = 3

switch (month) {
    case 1:                               // shift + alt + down arrow for making duplicate copies
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;                // if we remove break statement then it will does not check further conditions & give all as output except default

    default:
        console.log("Default case match");
        break;
}