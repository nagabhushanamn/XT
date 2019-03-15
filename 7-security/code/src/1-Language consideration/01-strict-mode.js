// enabling strict mode for this entire file
// comment out the line below in order to run the same test w/o strict mode
"use strict";

var assert = require("assert");

attempt("to introduce a new variable via eval()", function () {
    eval("var a = true");
    assert(a);
});

attempt("to access function.caller", function () {
    function restricted() {
        restricted.caller;
    }

    restricted();
});

attempt("to access function.arguments", function () {
    function restricted() {
        restricted.arguments;
    }

    restricted();
});

attempt("to access arguments.callee", function () {
    function restricted() {
        arguments.callee;
    }

    restricted();
});

attempt("to access the global variable via this", function () {
    assert(this === global);
});

function attempt(msg, fn) {
    console.log("Attempting:", msg);

    try {
        fn();
        console.log("> Success!")
    } catch (e) {
        console.error(">", e);
    }

    console.log();
}
