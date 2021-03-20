/*

 TERNARY OPERATOR: ? (klaustukas)

 palyginimas ? ką daryti, jeigu tenkina logiką : ką daryti, jei logikos netenkina

 palyginimas ? true : false

 */

 const a = 8 ;
 const b = 7;

 let ats = ''; // Cia gali buti betkokia reiksme. Tuscia tekstine vieta, nurodo, kad cia numatyta vieta tekstui.

 if (a > b) {
     ats = 'daugiau';
 } else {
     ats = 'ne daugiau'
 }
 console.log(ats);

 const c = 3;
 const d = 5;

 const ats2 = c > d ? 'daugiau' : 'ne daugiau';

 console.log(ats2);

 const pazymiai = [7, 10, 7];

 const = pazymiai[0] + pazymiai[1] + pazymiai[2];

 const vidurkis = suma / pazymiai.length;
 console.log(vidurkis);