/**
 * enabling strict mode for this entire file
 * comment out the line below in order to run the same test w/o strict mode
 *
 * NOTICE: without strict-mode, operations below that *should* fail will fail
 *         silently. By using strict mode makes it possible to catch these
 *         failures as they happen
 */
"use strict";

console.log("testing object state mutation");

var o = {
    a: "A",
    b: "B",
    c: "C"
};

console.log("base object:", o);
console.log();

console.log("##--- Object.preventExtensions() ---##");
attemptWrite(o, "d", "D");
Object.preventExtensions(o);
console.log("...Preventing extensions on the base object...");
attemptWrite(o, "e", "E");
console.log();

console.log("##--- Object.seal() ---##");
attemptDelete(o, "d");
console.log("...Sealing the base object...");
Object.seal(o);
attemptDelete(o, "c");
console.log();

console.log("##--- Object.freeze() ---##");
attemptWrite(o, "c", 3);
console.log("...Freezing the base object...");
Object.freeze(o);
attemptWrite(o, "b", 2);
console.log();


// helper functions
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
