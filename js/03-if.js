/* IF STATEMENT:
logikos šablonai
if () {}
if () {} else {}

palyginimo operatoriai:
- visi:         >, <, >=, <=, ==, !=, ===, !==
- naudotini:    >, <, >=, <=, ===, !==
- nenaudotini:  ==, !=, nes nera tikrinamas reiksmiu tipas
*/

const a = 7;
const b = 4;
if (a > b) {console.log(a, 'yra daugiau uz', b);}

// const ats = a + ' yra daugiau uz ' + b;
if (a > b) {
    const ats = `7 yra daugiau uz 4`
    console.log(ats);}

    {const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);}
console.log('------------');

const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('------------');

const e = 8;
const f = 9;

if (e > f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (e <= f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (e == f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (e != f) {
    console.log('TAIP');
} else {
    console.log('NE');
}
console.log('------------');

const g = 'labas';
const h = 9;

if (g == h) {
    console.log('TAIP');
    const sandauga = g * 20;
    console.log(sandauga);
} else {
    console.log('NE');
    const sandauga2 = g - 10;
    console.log(sandauga2);
}
console.log('------------');

const i = '88';
const l = 88;

if (i === l) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (i !== l) {
    console.log('TAIP');
} else {
    console.log('NE');
}