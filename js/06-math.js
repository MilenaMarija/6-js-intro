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