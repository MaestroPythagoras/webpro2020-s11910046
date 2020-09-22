// OBJECT

// const mahasiswa = ["John", "Doe", 31, true];


//1. Object Literals
//(Kalau object memakai kurung kurawa)
// key: 'value'
const mhs1 = {
    //isi/properti dari objek masih bisa diubah-ubah, kecuali ingin mendeklarasikan defenisi objek baru.
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPsemester: [3.25, 3.01, 3.4, 3.56],
    //memakai 'this' untuk mau akses properti di dalam objek itu sendiri.
    //Kalau memakai arrowfunction, tidak memerlukan this lagi.
    hitungIPK: function(){
        console.log(this.IPsemester);
        this.IPsemester.forEach(function(el)){
            total = total + el;
        });
        this.IPkumulatif = total / 4;
    },
};
delete mhs1.namaBelakang;
console.log(mhs1);

/*
//2. Kata Kunci New
const mhs2 = newObject();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith";

//Mengakses Properti Objek
//1. Dot Notation (Lebih cenderung dipakai)
console.log(mhs1.umur);

//2. Bracket Notation
console.log(mhs1["namaBelakang"]);
*/

// Fungsi didalam array disebut Method

console.log(mhs1.alamat.jalan);
//memakai indeks jika menuju hal yang di inginkan
console.log(mhs1.IPsemester[2]);

mhs1.hitungIPK();
console.log(mhs1);


//Array Object (JSON)
const mahasiswa = [
    {
        nim: "001",
        namaDepan: 'John',
        namaBelakang: "Doe",
    },

    {
        nim: "002",
        namaDepan: 'Jane',
        namaBelakang: "Smith",
    },

    {
        nim: "003",
        namaDepan: 'Maestro',
        namaBelakang: "Pythagoras",
    },
];

mahasiswa.forEach(function(el)){
    console.log(el);
});

