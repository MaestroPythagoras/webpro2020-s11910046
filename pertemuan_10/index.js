  //Var, Let, Const

/*kelemahan var
1. Deklarasi variabel sama, tidak ada error
*/

//scope dalam javascript
//1. Function Scope (var)
//2. Block Scope
// semua yang ada buka dan tutup kurung disebut block
// var bukan block

/*tidak bisa diakses di luar fungsi
function tes(){
    for (var i=0; i<10; i++){
        console.log(i);
    }
}
*/

for (let i = 0; i<10; i++){
    console.log(i);
}
console.log(i);

//Templete Literal

const person  = {
    firstName:"Virjin",
    lastName:"Husain",
    age: 19,
}

console.log(
    "Hallo nama saya"+ 
    person.firstName +
    " " +
    person.lastName + 
    ". umur saya adalah" +
    person.age +
    "tahun."
)
console.log(
    `Hallo nama saya ${person.firstName}. ${person.lastName}. Umur saya ${person.age} tahun` 
)