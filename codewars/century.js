/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/javascript
*/
/* //Amžius yra metai padalinta iš 100.
const amzius = year / 100;
console.log(amzius);

//suapvalinti, jog nelikt7 po kablelio liekanos
amzius = Math.floor(amzius);
console.log(amzius);

// jei egzistuoja dalybos liekana, tai +1 amžius.
if (year % 100 > 0) {
    amzius++;
}
return amzius;
*/

function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(1705), '->', 18);
console.log(century(1900), '->', 19);
console.log(century(1601), '->', 17);
console.log(century(2000), '->', 20);
console.log(century(89), '->', 1);