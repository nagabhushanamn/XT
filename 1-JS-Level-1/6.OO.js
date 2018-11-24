"use strict"

// till ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name)
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old ")
// }

// from Es6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor()')
    }
    sayName() {
        console.log('im ' + this.name)
    }
    sayAge() {
        console.log('im ' + this.age + " old ")
    }
}

// var p1 = new Person('Nag', 35)

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
        console.log('Employee::constructor()')
    }
    saySalary() {
        console.log('i wont');
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

// let e = new Employee('Nag', 35, 1000.00);

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }
}

let boss = new Boss('Nag', 35, 1000)


class Abc {
    static staMethod() {
        console.log('static..')
    }
    ins() {
        console.log('instance..')
    }
}
Abc.staVar1 = 1
Abc.staVar2 = 2

Abc.staMethod();


let abc = new Abc();

// class Product {

//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }

// }
// let p = new Product();



//------------------------------------------



let person = {

    // data-properties
    _name: 'Nag',
    _age: 35,

    // accessor properties

    // set name(name) {
    //     if (name)
    //         this._name = name
    // },

    get name() {
        return this._name
    }
}



person.name = "Nag N"
console.log(person.name)