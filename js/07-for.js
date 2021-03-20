/*

FOR LOOP (ciklas):

for () {}

*/



for (let i = 3; i <= 7; i++) {
    console.log(i);
} 

console.log('ciklo pabaiga');

console.log('---------------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];

console.log(zodis);

console.log('---------');
const marks = [5, 7, 10, 4, 2, 10]; 

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
} 