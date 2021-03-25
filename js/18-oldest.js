/*
Gimines medyje reikai rasti kas buvo/yra vyriausias?
*/

function oldest(asmuo) {
    return giminesSaka.age;
}

const gimine1 = {
    name: 'Petras',
    age 40,
    children: [
        {
            name: 'Maryte',
            age: 45
        },
        {
            name: 'Jonas',
            age: 43
        },
    ]
}

const vyriausias = oldest(gimine1);
console.log(vyriausias);