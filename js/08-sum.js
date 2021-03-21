/*
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):

a. 0 - 0        = 0
b. 0 - 4        = 10
c. 0 - 100      = 5050
d. 574 - 815    = labai didelis skaicius
e. -50 - 50     = 0
f. -70 - 30     = santykinai didelis neigiamas skaicius (-2020)

*/




// A. Intervale nuo 0 iki 4 suma yra 10.
const nuoA = 0;
const ikiA = 0;
let sumaA = 0;

for (let i = nuoA; i <= ikiA; i++) {
    sumaA += i;
}
const atsA = `Internvale nuo ${nuoA} iki ${ikiA} suma yra ${sumaA}.`;
console.log(atsA);
console.log('---------------------');

// B. Intervale nuo 0 iki 4 suma yra 10.
const nuo = 0;
const iki = 4;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma += i;
}
const ats = `Internvale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
console.log(ats);
console.log('---------------------');

// C. Intervale nuo 0 iki 100 suma yra 5050.
const nuoC = 0;
const ikiC = 100;
let sumaC = 0;

for (let i = nuoC; i <= ikiC; i++) {
    sumaC += i;
}
const atsC = `Intervale nuo ${nuoC} iki ${ikiC} suma yra ${sumaC}.`;
console.log(atsC);
console.log('------------------');

// D. Intervale nuo 574 iki 815 suma yra LDS.
const nuoD = 574;
const ikiD = 815;
let sumaD = 0;

for (let i = nuoD; i <= ikiD; i++) {
    sumaD += i;
}
const atsD = `Intervale nuo ${nuoD} iki ${ikiD} suma yra ${sumaD}.`;
console.log(atsD);
console.log('----------------------');

//E. Intervale nuo -50 iki 50 suma yra 0.
const nuoE = -50;
const ikiE = 50;
let sumaE = 0;

for (let i = nuoE; i <= ikiE; i++) {
    sumaE += i;
}
const atsE = `Intervale nuo ${nuoE} iki ${ikiE} suma yra ${sumaE}.`;
console.log(atsE);
console.log('----------------------');

//F. Intervale nuo -70 iki -30 suma yra -2020.
const nuoF = -70;
const ikiF = -31;
let sumaF = 0;

for (let i = nuoF; i <= ikiF; i++) {
    sumaF += i;
}
const atsF = `Intervale nuo ${nuoF} iki ${ikiF} suma yra ${sumaF}.`;
console.log(atsF);
console.log('--------------------');

//G. Intervale nuo 10 iki 0 suma yra 55. !!!!! "nuo" yra didesnis už "iki"!!!!!!!!!
const nuoG = 10;
const ikiG = 0;

if (nuoG <= ikiG) {
    for (let i = nuoG; i <= ikiG; i++) {
        sumaG += i;
    }
} else {
    for (let i = ikiG; i <= nuoG; i++) {
        sumaG += i;
    }
}
const atsG = `Intervale nuo ${nuoG} iki ${ikiG} suma yra ${sumaG}.`;
console.log(atsG);
console.log('-------------------');