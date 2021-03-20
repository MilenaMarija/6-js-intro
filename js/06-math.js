const pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);

console.log('------------');

const marks = [10, 8, 6, 4];

const count = marks.length;
let sum = 0;
console.log('sum:', sum);

sum = sum + marks[0];       // 0 + 10
console.log('sum:', sum);

sum = sum + marks[1];       // 10 + 8
console.log('sum:', sum);

sum = sum + marks[2];       // 18 + 6
console.log('sum:', sum);

sum = sum + marks[3];       // 24 + 4
console.log('sum:', sum);

const average = sum / count;
console.log(average);

console.log('------------');

const marks2 = [2, 4, 6, 8];

let sum2 = 0;               
console.log(sum2);

sum2 += marks2[0];    // 0 + 2
console.log(sum2);

sum2 += marks2[1];    // 2 + 4
console.log(sum2);

sum2 += marks2[2];    // 6 + 6
console.log(sum2);

sum2 = sum2 + marks2[3];    // 12 + 8
console.log(sum2);

console.log('------------');

const marks3 = [2, 4, 6, 8];

let sum3 = 0;
let markIndex3 = 0;               
console.log(sum3);

sum3 += marks3[markIndex3];    // 0 + 2
console.log(sum3);

markIndex3 += 1;             // 2 + 4
sum3 += marks3[markIndex3];
console.log(sum3);

markIndex3 += 1;               // 6 + 6
sum3 += marks3[markIndex3];
console.log(sum3);

markIndex3 += 1;              // 12 + 8
sum3 += marks3[markIndex3];
console.log(sum3);

console.log('------------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

console.log('---------');

let a = 5;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);