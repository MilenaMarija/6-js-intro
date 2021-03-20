/*

SWITCH STATEMENT:

switch() { case, break, default}

*/

const animal = 'cat';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;
    
    case 'cat':
        console.log('Meow meow');
        break;

    default:
        console.log('Unknown animal');
        break;
}

if (animal === 'dog') {
    console.log('Bark bark');
 } else if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknown animal');
}
// Aukščiau esančias logikas galima pasirinktinai rašyti vieną arba kitą, nes jos analogiškos - reikšmės identiškos, tik užrašymo būdas skiriasi.
console.log('---------------------');

const day = 4;

switch (day) {
    case 1:
        console.log('Pr');
        break;
    case 2:
        console.log('An');
        break;
    case 3:
        console.log('Tr');
        break;
    case 4:
        console.log('Kt');
        break;
    case 5:
        console.log('Pn');
        break;
    case 6:
        console.log('Št');
        break;
    case 7:
        console.log('Sk');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja.');
        break;
}
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena.');
        break;
    case 6:
    case 7:
        console.log('Savaitgalio diena.');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja..');
        break;
}
switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('Nelyginė diena.');
        break;
    case 2:
    case 4:
    case 6:
        console.log('Lyginė diena.');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja..');
        break;
}
if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('Darbo diena..');
} else if (day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia diena savaiteje neegzistuoja');
}
console.log('---------------');

const process = 3;

if (process === 1) {
    console.log('paimti puodeli');
} else if (process === 2) {
    console.log('isideti arbatos');
} else if (process === 3) {
    console.log('istirpinti saldikli');
} else if (process === 4) {
    console.log('isipilti vandens');
} else if (process === 5) {
    console.log('ismaisyti');
} else if (process === 6) {
    console.log('gerti');
}

switch (process) {
    case 1:
        console.log('paimti puodeli..');
        break;
    case 2:
        console.log('isideti arbatos..');
        break;
    case 3:
        console.log('istirpinti saldikli..');
        break;
    case 4:
        console.log('isipilti vandens..');
        break;
    case 5:
        console.log('ismaisyti..');
        break;
    case 6:
        console.log('paimti puodeligerti..');
        break;
    default:
        console.log('Jau viska sekmingai atlikai..');
}