/* Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
2. Funkcija pavadinimu “daugyba”:
a. priima du skaičiaus tipo kintamuosius
b. atskirame kintamajame įsimena sandaugos reikšmę
c. gražina saudaugos rezultatą
d. TESTAI:
    i. console.log( daugyba( skaicius1, skaicius2 ) );
    ii. console.log( daugyba( skaicius3, skaicius2 ) );
    iii. console.log( daugyba( skaicius1, skaicius3 ) );
    iv. rezultatas: teisingos reikšmės;
*/

function daugyba(a, b) {
    const rez = a * b;      // rez = rezultatas
    return rez;
}

console.log(daugyba(4, 5));
console.log(daugyba(44, 5));
console.log(daugyba(-44, -55));
console.log(daugyba(-44, 55));
console.log(daugyba(-44, 0));
console.log(daugyba(0, 0));
console.log(daugyba(0, 54850));
console.log(daugyba(3.14, 2));

/* Pvz.: su extra skaiciumi:

const extra = 10;

function daugyba(a, b, x) {
    const rez = a * b * x;      
    return rez;                 // rez = rezultatas
}

console.log(daugyba(4, 5, extra));
console.log(daugyba(44, 5, extra));
console.log(daugyba(-44, -55, extra));
console.log(daugyba(-44, 55, extra));
console.log(daugyba(-44, 0, extra));
console.log(daugyba(0, 0, extra));
console.log(daugyba(0, 54850, extra));
console.log(daugyba(3.14, 2, extra));
*/