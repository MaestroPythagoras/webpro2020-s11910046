// fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
  };
  
  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
  // fungsi yang tidak memiliki parameter
  const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  
  console.log(namaJenisAnjing());

  // Exercise (Convert to ES6 Syntax)
  // ES5
  function yearUntilRentirement(year, firstName) {
    var age = 28;
    var retirement = 65 - age;
    if (retirement > 0) {
      console.log(firstName + " retired in " + retirement + " years");
    }
    else {
      console.log(firstName + " is already retired.");
    }
  }

  // ES6 Syntax
  function yearUntilRentirement(year, firstName) {
    const age = 28;
    const retirement = 65 - age;
    if (retirement > 0) {
      console.log(`${firstName} retired in ${retirement} years`);
    }
    else {
      console.log(`${firstName} is already retired.`);
    }
  }
