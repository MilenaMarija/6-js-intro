/* Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
2. Funkcija pavadinimu “daugyba”:
a. priima du skaičiaus tipo kintamuosius
b. atskirame kintamajame įsimena sandaugos reikšmę
c. gražina saudaugos rezultatą
d. TESTAI:
    i. console.log( daugyba( skaicius1, skaicius2 ) );
    ii. console.log( daugyba( skaicius3, skaicius2 ) );
    iii. console.log( daugyba( skaicius1, skaicius3 ) );
    iv. rezultatas: teisingos reikšmės; */

    function daugyba(a, b) {
        // parametru validacija
        // jeigu, a yra ne skaičius, grazinti klaidos pranesima
        if (typeof a !== 'number') {
            return 'Pirmasis parametras turi buti skaiciaus tipo';
        }
        //Jeigu skaičius a yra NaN arba teigiama/neigiama begalybė, grąžinti klaidos pranešimą
        if (isNaN(a) || a === Infinity || a === -Infinity) {
            return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
        }
        // jeigu, b yra ne skaičius, grazinti klaidos pranesima
        if (typeof b !== 'number') {
            return 'Antrasis parametras turi buti skaiciaus tipo';
        }
        //Jeigu skaičius b yra NaN arba teigiama/neigiama begalybė, grąžinti klaidos pranešimą
        if (isNaN(b) || b === Infinity || b === -Infinity) {
            return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`;
        }
    
        // logika
        const rez = a * b;
    
        // rezultato grazinimas
        return rez;
    }
    
    console.log(daugyba('trys', 'penki'));
    console.log(daugyba(3, 'penki'));
    console.log(daugyba('penki', 3));
    console.log(daugyba(true, false));
    console.log(daugyba(3, false));
    console.log(daugyba(false, 3));
    console.log(daugyba(['asd', 786], 3));
    console.log(daugyba(3, ['asd', 786]));
    console.log(daugyba(['asd', 786], ['asd', 786]));
    console.log(daugyba(['asd'], 3));
    console.log(daugyba(3, ['asd']));
    console.log(daugyba(['asd'], ['asd']));
    console.log(daugyba([2], 3));
    console.log(daugyba(3, [2]));
    console.log(daugyba([2], [2]));
    console.log(daugyba(NaN, 3));
    console.log(daugyba(3, NaN));
    console.log(daugyba(NaN, NaN));
    console.log(daugyba(Infinity, 3));
    console.log(daugyba(3, Infinity));
    console.log(daugyba(Infinity, Infinity));
    console.log(daugyba(-Infinity, 3));
    console.log(daugyba(3, -Infinity));
    console.log(daugyba(-Infinity, -Infinity));
    
    console.log(daugyba(4, 5), '->', 20);
    console.log(daugyba(44, 5), '->', 220);
    console.log(daugyba(-44, -55), '->', 2420);
    console.log(daugyba(-44, 55), '->', -2420);
    console.log(daugyba(-44, 0), '->', 0);
    console.log(daugyba(0, 0), '->', 0);
    console.log(daugyba(0, 54850), '->', 0);
    console.log(daugyba(3.14, 2), '->', 6.28);
    console.log(daugyba(3, 5), '->', 15);