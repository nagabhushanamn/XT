

"use strict"

/*

    function-binding
    -------------------

    ==> function on object

    2 way

    1. static
    2. dyanmic


*/


//-----------------------------------
//   static function-binding  
//-----------------------------------
/* 
function sayNameForAll() {
    console.log('im ' + this.name);
}
let p1 = {
    name: 'Nag',
    sayName: sayNameForAll
}

let p2 = {
    name: 'Ria',
    sayName: sayNameForAll
}
// sayNameForAll(); // Error
p1.sayName();
p2.sayName();

// delete p1.sayName 
*/


//-----------------------------------
//   dynamic function-binding  
//-----------------------------------
/* 
function sapientXTTraining(sub, duration, location) {
    console.log(`The Tnr-${this.name} teaching ${sub}-${duration} in ${location}`);
}


let tnr1 = { name: 'Nag' }
let tnr2 = { name: 'subbu' }
Object.preventExtensions(tnr1);
Object.preventExtensions(tnr2);

// tnr.sapientXTTraining = sapientXTTraining; // Error

// way-1 : call()
// sapientXTTraining.call(tnr2, '.js', 1, 'delhi')

//way-2 :  apply()
// sapientXTTraining.apply(tnr2, ['.js', 3, 'delhi'])

//way-2 : bind()
let newF = sapientXTTraining.bind(tnr1, '.js');

newF(3, 'BLR');
newF(1, 'DELHI');

 */

//  ----------------------------------------
// summary :
//  ----------------------------------------

// function func() {
//     console.log(this);
// }
// func();

// let o1 = { name: 'One', func: func } // static
// o1.func();
// let o2 = { name: 'Two' }
// func.call(o2);   // dynamic

// ---------------------------------------------------------

// Quiz
/* 

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let self=this;
        let doLearn = function () {
            console.log(this.name + " learning .js from " + self.name);
        }
        console.log("teaching .js ends");
        return doLearn;
    }
}

let learnFunc = tnr.doTeach();
// learnFunc();
let emp = { name: 'sapient' }
learnFunc.call(emp)

let newTnr = { name: 'subbu' }
learnFunc = tnr.doTeach.call(newTnr);
learnFunc.call(emp)
 */

// ---------------------------------------------------------
// Quiz


// let pName = "Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log("im " + pName);
//         console.log("im " + person.pName);
//         console.log("im " + this.pName);
//     }
// }

// // person.sayName();
// let oldPerson = person;
// person = { pName: 'Subbu' }
// oldPerson.sayName();


// ---------------------------------------------------------


// 

function sessionStart() {
    function sapientXTTraining() {
        console.log(this.name + " teaching .js ")
        let self = this;
        let learn = function () {
            console.log(this.name + " learning js from " + self.name);
        }
        return learn;
    }
    function Trainer(name) {
        this.name = name;
    }
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.work = function () {
        console.log(this.name + " working after learn");
    }
    let tnr = new Trainer('Subbu')
    let e1 = new Employee('E1')
    let e2 = new Employee('E2')
    let learnFunc = sapientXTTraining.call(tnr);
    learnFunc.call(e1);
    learnFunc.call(e2);
    e1.work();
    e2.work();
    console.log("session ends...");
}
sessionStart();