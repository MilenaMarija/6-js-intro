/* IF STATEMENT:
logikos šablonai
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}

palyginimo operatoriai:
- visi:         >, <, >=, <=, ==, !=, ===, !==, !
- naudotini:    >, <, >=, <=, ===, !==, !
- nenaudotini:  ==, !=, nes nera tikrinamas reiksmiu tipas

loginiai operatoriai: &&, ||
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
console.log('------------');

const cookiesAgreed = false;

if (cookiesAgreed === true) {
    console.log('Ismetame cookies sutikimo bloka...');
}
if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka...');
}
console.log('------------');

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}
console.log('------------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);
console.log('------------');

const akys = 'Pilkos';

if (akys === 'Melynos') {
    console.log('Oj, kokie fainulkos!');
    } else if (akys === 'Zalios') {
        console.log('Sexy!');
    } else if (akys === 'Rudos') {
        console.log('Melagis?');
    } else if (akys === 'Pilkos') {
        console.log('Niekuo neypatingi :(')
    } else if (akys === 'Raudonos') {
        console.log('PROGRAMERIS.');
    } else {
        console.log('Ar tu turi akis?');
    }
    
    if (akys === 'Melynos') {
        console.log('Oj kokie fainulkos!!!');
    } else {
        if (akys === 'Zalios') {
            console.log('Sexy 🥰🥰');
        } else {
            if (akys === 'Rudos') {
                console.log('Melagis?? 🤔');
            } else {
                if (akys === 'Pilkos') {
                    console.log('Niekuo neypatingi..');
                } else {
                    if (akys === 'Raudonos!!') {
                        console.log('👨‍💻👩‍💻');
                    } else {
                        console.log('Ar tu turi akis??');
                    }
                }
            }
        }
    }
    
    console.log('---');

    if (akys === 'Melynos') {
        console.log('Oj kokie fainulkos!!!');
    }
    
    if (akys === 'Zalios') {
        console.log('Sexy 🥰🥰');
    }
    
    if (akys === 'Rudos') {
        console.log('Melagis? 🤔');
    }
    
    if (akys === 'Pilkos') {
        console.log('Niekuo neypatingi...');
    }
    
    if (akys === 'Raudonos') {
        console.log('👨‍💻👩‍💻');
    }
    
    if (akys !== 'Melynos' &&
        akys !== 'Zalios' &&
        akys !== 'Rudos' &&
        akys !== 'Pilkos' &&
        akys !== 'Raudonos') {
        console.log('Ar tu turi akis???');
    }
    
    if (akys === 'Melynos' ||
        akys === 'Zalios' ||
        akys === 'Rudos' ||
        akys === 'Pilkos' ||
        akys === 'Raudonos') {
        console.log('Tu turi vienas is man zinomu akiu spalvu!');
    }