// Destrukturisasi : Memecah item/properti pada array atau object kedalam variabel yang berbeda.

// -----------------------------------------------------------------------------
// 1. ARRAY

// const colors = ["merah", "kuning", "hijau"];

// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];

// let [satu, dua, tiga] = colors;
// console.log(satu,dua,tiga);

// let [satu, dua] = colors;
// console.log(satu,dua);

// let [satu, ,tiga] = colors;
// console.log(satu,tiga);

// let [satu,dua,tiga,empat="biru"];
// console.log(satu,dua,tiga,empat);

// -----------------------------------------------------------------------------
// 2. OBJECT

// const user = {
//     name: "John",
//     gender: "male",
//     age: 33,
// };

// let name = user.name;
// let gender = user.gender;
// let age = user.age;

// let {name,gender,age} = user;
// console.log (name,gender,age);

// let {name,age} = user;
// console.log (name,age);

// let {name:nama,age:umur} = user;
// console.log (nama,umur);

// const display = (props) =>{
//     console.log(`Nama saya adalah ${name}. Umur saya adalah ${age}`);
// };

// display(user);

// -----------------------------------------------------------------------------
// 3. ARRAY OBJECT

// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Jane"},
//     {id: 3, name: "Bob"},
// ];

// let [user1, user2, user3] = users;
// console.log(user1,user2,user3);

// let[,   {id:idUser1,name:nameUser1},
//         {id:idUser2,name:nameUser2},
//         {id:idUser3,name:nameUser3},
// ] = users;
// console.log(idUser1, nameUser2);


// -----------------------------------------------------------------------------
// 4. Kombinasi dengan Rest Operator

// const colors = ["merah","kuning","hijau","biru"];

// let [satu, ...lainnya] = colors;

// consloe.log(satu);
// let[satu];

