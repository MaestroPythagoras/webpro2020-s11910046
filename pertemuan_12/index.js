// Arrow Function

// Multiple Arguments
/*
const calcAge = (birthYear, currentYear) => {
    const x;
    return currentYear - birthYear;
};
*/

// No Argument with implicit return value
/*
const calcAge = () => 2020 - 1992;
console.log(calcAge(calcAge));
*/

/*
const years = [1990, 1992, 2001, 2005];
const calcAge5 = years.map(function (el){
    return 2020 - el;
});

const calcAge6 = years.map((el) => 2020 - el);

console.log(calcAge5);
*/

// Multiple Arguments

// Default Parameter
const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;
console.log(calcAge(1991, 2021));