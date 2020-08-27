/* 
    DASAR-DASAR PEMROGRAMAN JAVASCRIPT
    1. Variabel dan Tipe Data
    2. Operator
    3. Array
    4. Object
    5. Fungsi
    6. JavaScript Conditional
    7. JavaScript Loop

*/
//=====================================

/*
    1. Variabel dan Tipe Data
*/

const firstName = "John"
let age = 20;
age = 21;
const isMarried = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(age + " " + isMarried);

const info =
    "My name is " + firstName + ", I'm" + age + " years old." + isMarried;

console.log(typeof info);

function display(){
    for (var i=0 ; i<10 ; i++)
    {
        console.log(i)
    }
    console.log(i);
}

/*
    2. Operator
*/

let bilangan = 10;

const.log(bilangan == "10");    // Loose Equality
const.log(bilangan === "10");   // Strict Equality