// Rest Parameter & Spread Operator
//__________________________________


// 1. REST OPERATOR
const hitung = {a,b,c,d,e} =>{
    const angka = [a,b,c,d,e];

    let total = 0;
    for (let i=0; i<5; i++){
        total = total + angka[i];
    }
    return total;
};


// Variabel angka menjadi array kalau dipakaikan Rest Operator
const hitung = (...angka) =>{
    console.log(angka); 
    let total = 0;
    angka.forEach(el=>{
        total = total+el;
    });
    return total;
};

console.log(hitung(1,2,3,4,5));

// 2. SPREAD OPERATOR
// Tujuan: 
// a. Memecah array
const angka = [1,2,3,4,5];
const angka2 = [...angka];

angka[0] = 10;
console.log(angka);
console.log(angka2);

// b. Menggabungkan array
const angka = [1,2,3,4,5];
const angka2 = [6,7,8,9,10];
const angka3 = [12,13];

const gabung = angka.1 concat(angka2, angka3);
console.log(gabung);

const gabung6=[...angka,...angka2,11,...angka3];
console.log(gabung6);

// c. Sebagai Object
let orang = {
    Nama: "John",
    Umur: 33,
};
orang { ...orang, pekerjaan: "Guru", pendidikan: "S2"};
console.log(orang);

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const objGabung = {...obj1, ...obj2};
console.log(objGabung);
