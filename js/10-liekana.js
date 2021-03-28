/* Ciklo for panaudojimas
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;

console.log(ats);

/*
Norint padalinti skaičius nuo 0 iki 20 iš 5, be liekanos:
0 - 20 / 5
Ats.: 0, 5, 10, 15, 20 - tai yra 
i+=5 tai yra i+=daliklis
----------------
Norint padalinti skaičius nuo 1 iki 20 iš 5, be liekanos:
1 - 20 / 5
Ats.: 5, 10, 15, 20 - reiktų ciklą pradėti nuo artimiausio skaičiaus, kuris dalinasi be liekanos.
------------
Norint padalinti skaičius nuo 11 iki 20 iš 5, be liekanos:
11 - 20 / 5
Radus pirmą skaičių, kuris yra tinkamas, jeigu žinote pabaigą, užtektų eiti per kažkelintą skaičių, sutaupant daug laiko ir surasti tinkamą atsakymą, pvz. 
i+=5 tai yra i+=daliklis
Ats.: 15, 20 
(20-15) / 5 + 1 tai yra supaprastinta formulė, kuri yra lygi 
(iki-nuo) / daliklis + 1
*/