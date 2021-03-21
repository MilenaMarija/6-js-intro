/*
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):

a. 0 - 0        = 0
b. 0 - 4        = 10
c. 0 - 100      = 5050
d. 574 - 815    = labai didelis skaicius
e. -50 - 50     = 0
f. -70 - 30     = santykinai didelis neigiamas skaicius (-2020)

*/
// b.
const nuo = 0;
const iki = 4;
let suma = 0;

for (let i = nuo ; i <= iki; i++) {
    suma += i;
}

const ats = 'Intervale nuo ' + nuo + iki + ' suma yra ' + suma + '.';
console.log(ats);
