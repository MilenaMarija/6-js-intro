/*
VISOS KOMBINACIJOS DARBUI SU TEKSTU
*/

// Siandien yra: Kovo desimta.
const menuo = 'Kovas';
const diena = 'desimta';

const dayString = 'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayString);

// Cia yra dviguba kabute (").
const dvigubaKabute = 'Cia yra dviguba (") kabute.';
console.log(dvigubaKabute);

// Cia yra vienguba (') kabute.
const viengubaKabute = "Cia yra vienguba (') kabute.";
console.log(viengubaKabute);

// Turiu vienguba (') ir dviguba (") kabutes.
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabutes."
console.log(viengubaDviguba);

// Turiu dviguba (") ir vienguba (') kabutes. 
const dvigubaVienguba = 'Turiu dviguba (") ir vienguba (\') kabutes.';
console.log(dvigubaVienguba);

// Max saugumas dviguba (") ir vienguba (') kabutes.
const maxKabutes1 = 'Max saugumas dviguba (\") ir vienguba (\') kabutes.';
console.log(maxKabutes1);

// Max saugumas dviguba (") ir vienguba (') kabutes.
const maxKabutes2 = "Max saugumas dviguba (\") ir vienguba (\') kabutes."
console.log(maxKabutes2);

const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>';
console.log(navHTML);

console.log('-------------------');


// Mano vardas: Petras.
const vardas = 'Petras';
const petrasIntro = 'Mano vardas: ' + vardas + '.';
console.log(petrasIntro);

const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick);

// Naujausias pazymys: 2.
const marks = [10, 5, 8, 7, 2, 10, 8, 6];
const markSentence0 = `Pirmas pazymys: ${marks[0]}.`;
console.log(markSentence0);
const markSentence1 = `Antras pazymys: ${marks[1]}.`;
console.log(markSentence1);
const markSentence = `Naujausias pazymys: ${marks[marks.length - 1]}.`;
console.log(markSentence);


const navHTML2 = `<nav>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
</nav>`;
console.log(navHTML2);