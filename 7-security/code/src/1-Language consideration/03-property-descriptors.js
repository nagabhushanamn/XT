/**
 * enabling strict mode for this entire file
 * comment out the line below in order to run the same test w/o strict mode
 *
 * NOTICE: without strict-mode, operations below that *should* fail will fail
 *         silently. By using strict mode makes it possible to catch these
 *         failures as they happen
 */
"use strict";

var assert = require("assert");
var o = {};

console.log("object", o);

// both of these definitions are completely identical in result
// (a normal, fully accessible property)
o.a = "A";
attemptWrite(o, "a", 1);

Object.defineProperty(o, "a", {
    writable: true,
    enumerable: true,
    configurable: true,
    value: "A"
});
attemptWrite(o, "a", "A");

// to create a "locked-down" property, use
Object.defineProperty(o, "b", {
    value: "B"
});
attemptEnumeration(o, "b");
attemptWrite(o, "b", 2);
attemptDelete(o, "b");
console.log();


// creating a getter and setter
console.log("working with getters and setters:");
var person = {
    firstName: "Dominic",
    lastName: "Barnes"
};
Object.defineProperty(person, "name", {
    enumerable: true,
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (input) {
        var names = input.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
});
console.log("person:", person);
console.log("get: person.name =", person.name);
person.name = "Pablo Aizpiri";
console.log("set: person.name = Pablo Aizpiri");
console.log("person:", person);
console.log();


// setting multiple properties
console.log("setting multiple properties at once:");
var letters = {};
Object.defineProperties(letters, {
    a: {
        enumerable: true,
        value: "A"
    },
    b: {
        enumerable: true,
        value: "B"
    }
});
console.log(letters);
console.log();

// creating a constants object
console.log("creating a constants object:");
var constants = Object.create(null, {
    PI: {
        enumerable: true,
        value: 3.14
    },
    e: {
        enumerable: true,
        value: 2.72
    }
});
console.log("constants:", constants);
attemptWrite(constants, "PI", 5);
attemptDelete(constants, "PI");
attemptWrite(constants, "e", 10);
attemptDelete(constants, "e");


// helper functions
function attemptEnumeration(obj, prop) {
    try {
        console.log("Attempting to enumerate property", prop);
        assert(Object.keys(o).indexOf(prop) > -1);
        console.log("> Success!");
    } catch (e) {
        console.error(">", e);
    }
}

function attemptWrite(obj, prop, value) {
    try {
        console.log("Attempting to write property", prop, "as", value);
        o[prop] = value;
        console.log("> Success!");
    } catch (e) {
        console.error(">", e);
    }
}

function attemptDelete(obj, prop) {
    try {
        console.log("Attempting to delete property", prop);
        delete o[prop];
        console.log("> Success!");
    } catch (e) {
        console.error(">", e);
    }
}
