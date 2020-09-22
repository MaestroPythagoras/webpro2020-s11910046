// 1. ARRAY

//Mendeklarasikan Array
let angka = [1,2,3,4,5,6,7,8];
console.log(angka);
let buah = ["Mangga", "Apel", "Jeruk"];
console.log(buah);

let arr = ["text", 1, true];
console.log(arr);

let myFunc = function () {
    return "Hello Array";
};

let arr2 = ["text", true, myFunc(), [1,2,3,4,5]];

//Mengakses elemen dalam array
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4][2]);

console.log(typeof arr2);
console.log(arr2. length);

//Deklarasi array menggunakan kata kunci new
let buah2 = new Array ("Salak", "Jambu", "Melon");
console.log(buah2);

//Manipulasi Array
//1. Menambah isi Array

let mhs = [];
mhs[0] = "Maestro";
mhs[1] = "Pythagoras";
mhs[2] = "Hulu";
mhs[5] = "test";

console.log(mhs);

//2. Mengubah isi Array
mhs[1] = "Donny";
console.log(mhs);

//3. Menghapus isi Array
mhs[2] = undefined;
console.log(mhs);

//4. Menampilkan seluruh isi Array
let mhs = ["John", "Bob", "Jane", "Peter"];

for (let i=0 ; i < length ; i++){
    console.log("Mahasiswa ke-" + (i+1) + " adalah " + mhs )
}

//Method dalam Array
//1. Length
//2. toString (mengubah isi dari Array mhs menjadi string.)
let mhs = ["John", "Bob", "Jane", "Peter"];
console.log(mhs.toString());
//3. Join
console.log(mhs.join(" - "));
/* 4. Push
, Pop
, unShift
, Shift
*/
//Push & Pop
mhs.push("Maes");
mhs.push("Pythagoras");
console.log(mhs.join(" - "));
mhs.pop();
mhs.pop();
console.log(mhs.join(" - "));

// unShift() & Shift(Mengeluarkan Elemen yg paling depan)
mhs.unshift("Maestro");
mhs.unshift("Pythagoras");
mhs.shift();
mhs.shift();
cconsole.log(mhs.join(" - "));

//5. Concat (Menggabung 2 Array atau lebih)
let buah = ["Mangga", "Apel", "Anggur"];
let sayur = ["Kol", "Bayam", "Singkong"];

let makanan = buah.concat(sayur);
console.log(makanan);

//6. SPLICE dan SLICE

//a. Splice (Menambah/Menghapus/Mengganti elemen didalam Array)
let buah = ["Mangga", "Apel", "Anggur", "Jeruk"];
buah.splice(2, 0, "Melon", "Semangka");
console.log(buah.join(" - "));

//b. Slice (Memotong)
let buah2 = buah.slice(0,3);
console.log(buah2.join(" - "));

//7. forEach dan MAP

//a. forEach (ada callback Function, tidak bisa di return)
let angka = [1,2,3,4,5,6,7,8];
let tampilAngka = (function(el){
    console.log(el);
});

// angka.forEach(tampilAngka);

//b. Map (Bisa di return)
let angka2 = angka.map(function(el){
    return el;
});

console.log(angka2);

//8. SORT (Mengurutkan)
let angka = [1,100,2,20,5,3,7,8];
let mhs = ["John","Sisca","Erick"];
mhs.sort();
console.log(mhs);
angka.sort(function (a,b){
    return a-b;
});
console.log(angka);

//9. FILTER (Program dibawah menampilkan angka yang lebih dari 5)
let angka = [1,100,2,20,5,3,7,8];
angka filter(function(el){
    return el > 5;
});
console.log(angka2);

