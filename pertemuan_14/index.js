// Destrukturisasi

// 1.Destrukturisasi Array
// let buah = ["mangga", "pisang", "anggur"];

// let buah1 = buah[0];
// let buah2 = buah[1];
// let buah3 = buah[2];

// console.log(buah1); 
// console.log(buah2); 
// console.log(buah3);

// let buah = ["mangga", "pisang", "anggur"];

// // lakukan destrukturisasi array
// let [buah1, buah2, buah3] = buah;

// console.log(buah1); // Output: mangga
// console.log(buah2); // Output: pisang
// console.log(buah3);

// let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

// console.log(namaDepan); 
// console.log(namaBelakang); 
// console.log(buku);

// 2.Destrukturisasi Objek

// let orang = {
//     nama: "Joko",
//     umur: 22,
//     sudahMenikah: false
//   };
  
//   // Destrukturisasi Objek
//   let { nama, umur, statusMenikah } = orang;
  
//   console.log(nama);
//   console.log(umur);
//   console.log(statusMenikah);

// let orang = {
//     name: "Joko",
//     age: 22,
//   };
  
//   // buat variabel nama berisi nilai dari properti name pada orang
//   // buat variabel age berisi nilai dari properti umur pada orang
//   let { name: nama, age: umur } = orang;
  
//   console.log(nama); // Output: Joko
//   console.log(umur); // Output: 22
  
// 3. Destrukturisasi Objek Bertingkat
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga);