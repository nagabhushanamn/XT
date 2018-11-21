"use strict"


console.log('-data-types-');


/*
    2 types
    --------
    1. simple / primitives ==> values
        a.  undefined
        b.  string
        c.  number
        d.  boolean
    2. complex / reference ==> objects
*/



//-----------------------------------------------------------------
// 1. simple / primitives ==> values
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// a. undefined
//-----------------------------------------------------------------

var v;

//-----------------------------------------------------------------

//-----------------------------------------------------------------
// b. string
//-----------------------------------------------------------------

var name = "Nag";
var selection = 'abc';

var dynamicString = "the trainer " + name;

//or => string interpolation ( es6 )
var dynamicString2 = `the trainer ${name}`
var sum = `the sum 1 and 2 ${1 + 2}`
var multiLineString = `
    line-1
    line-2
`;
var htmlTemplate = `
    <div>
        <h1> ${name}</h1>
    </div>
`


//-----------------------------------------------------------------
// c. number
//-----------------------------------------------------------------

var count = 12;
var cost = 12.12;

//-----------------------------------------------------------------


//-----------------------------------------------------------------
// d. boolean
//-----------------------------------------------------------------

var found = true;

// imp-note :

/*
    
    falsy values => false,0,"",null,undefined,NAN
    
    ref : https://dorey.github.io/JavaScript-Equality-Table/
*/




//-----------------------------------------------------------------
// 2. complex / reference ==> objects
//-----------------------------------------------------------------


/*

how to create object in .js-language ?

syntax:

var ref = new Constructor()

*/

//  till ES5, class/constructor  ===> function

// pascal-case ==> A____B____

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function () {
    //     console.log('im ' + this.name)
    // }
    // this.sayAge = function () {
    //     console.log('im ' + this.age + " old ")
    // }
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name)
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old ")
}

*/

// in ES6  ==> class-syntax

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = null;
        Person.count++
    }
    sayName() {
        console.log('im ' + this.name)
    }
    sayAge() {
        console.log('im ' + this.age + " old ")
    }
}
Person.count = 0; // static variables

var p1 = new Person('Nag', 35)
var p2 = new Person('Ria', 3)


/*
    ==> .js-lang is dynamic language

    by default 
    
    => all .js-objects are extensible i.e we can add new dynamic properties  as u need
    => also can delete property if not required

*/

// console.log(Object.isExtensible(p1))
// console.log(Object.isSealed(p1)
// console.log(Object.isFrozen(p1))

// Object.preventExtensions(p1)
// Object.seal(p1)
// Object.freeze(p1);

// p1.techSkill = 'java,js'
// delete p1.age;
// p1.age = -10;



// p1.sayName();
// p1.sayAge();





//-----------------------------------------------------------------
// literal-style object(s)
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// a. Object
//-----------------------------------------------------------------


var reqConfig = new Object();
reqConfig.url = "http://"
reqConfig.httpMethod = "GET"
reqConfig.onSuccess = function () {
    console.log('on success consuming response');
}

// or

var newReqConfig = {
    url: 'http://',
    httpMethod: 'GET',
    onSuccess: function () { }
}

//-----------------------------------------------------------------
//  Array/List
//-----------------------------------------------------------------


var menu = new Array();

// or

var newMenu = [];


//-----------------------------------------------------------------
//  RegExp
//-----------------------------------------------------------------

var adharPattern = new RegExp('\\d{4}-\\d{4}-\\d{4}');

// or

var newAdharPattern = /\d{4}-\d{4}-\d{4}/



//-----------------------------------------------------------------
//  Function
//-----------------------------------------------------------------

var add = new Function("n1", "n2", "var result=n1+n2;return result;");

// or


function newAdd(n1, n2) {
    var result = n1 + n2; return result;
}







//-----------------------------------------------------------------
//  How to access obj's properties?
//-----------------------------------------------------------------



var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: 'one',
    100: 'hundred'
};

console.log(person.name)
console.log(person["home-address"])
console.log(person["1"])
console.log(person[100])
