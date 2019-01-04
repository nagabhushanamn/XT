

// function f1() {
//     console.log("before LOG");
//     console.log('f1()');
//     console.log("after LOG");
// }


// function f2() {
//     console.log("before LOG");
//     console.log('f2()');
//     console.log("after LOG");
// }

// f1();
// f2();

/*

design issues
-------------

    => code tangling / main-logic tightly coupled with logging-logic
    => code scattering / code duplication in multiple places


    solns.

        => inheritance
        => composition    by higher-order-programming  ( best choice in component based arch)

*/

// Component-1
function f1() {
    console.log("f1()");
}

// Component-2
function f2() {
    console.log("f2()");
}

/*

Higher-Order-Programming/Function
A function that does at least one of the following is a Higher Order Function.


1. Takes one or more functions as arguments.
2. Returns a function as its result.

*/

function logWrapper(f) {
    return function () {
        console.log("before LOG");
        f();
        console.log("after LOG");
    }
}


const f1WithLog = logWrapper(f1);
const f2WithLog = logWrapper(f2);

f1WithLog();
f2WithLog();




//--------------------------------------------------

function isMin(n) {
    return n < 100;
}

function isMax(n) {
    return n > 100
}

function and(f1, f2) {
    return function (n) {
        return f1(n) && f2(n);
    }
}

//--------------------------------------------------

const f = and(isMin, isMax)

//--------------------------------------------------

const result = f(500)
console.log(result);


