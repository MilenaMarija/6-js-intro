/*

FOR LOOP (ciklas):

for () {}

*/

for (let i = 3; i <= 7; i++) {
    console.log(i);
} 
console.log('ciklo pabaiga');

console.log('---------------');

const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let rytasIndex = 0;

zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];

console.log(zodis);

console.log('---------');

const zmones = ['Aurelijus', 'Birutė', 'Celestina', 'Donatas'];

for (let i=0; i<zmones.length; i++ ) {
const asmuo = zmones[i];

console.log(asmuo);
}
console.log('---------');

const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3]; 
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;
}
const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);

console.log('---------');

