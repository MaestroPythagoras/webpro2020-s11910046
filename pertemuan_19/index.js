console.log("JavaScript Class & OOP");

// # Class & Constractor
// const Person={
//     firstName: "Stenly",
//     lastName: "Adam",
//     displayFullName: function(){
//         console.log{`${this.firstName} ${this,lastName}`};
//     },
// };

// Person.displayFullName();

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName(){
        console.log(`${this.firstName} ${this,lastName}`);
    }
}

// const person1 = new Person("Maestro","Pythagoras");
// person1.displayFullName();
// const person2 = new Person("Pythagoras","Maestro");
// person2.displayFullName();

// # Inheritance
class Student extends Person{
    constructor(firstName,lastName,NIM,age){
        super(firstName,lastName);
        this.NIM = NIM;
        this.age = age;
    }

    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }
    // # Static Member
    static sayHello(){
        console.log(`Hello World`);
    }
    // # Setter & Getter
    set studentScore(score){
        this.score = score;
    }
    get studentScore(){
        return this.score;
    }
}

const john = newStudent("John", "Doe", "112233");
john.displayFullName();
john.displayNIM();
// # Static Member
Student.sayHello();

 // # Setter & Getter
john.studentScore = 90;
console.log(john.studentScore);
