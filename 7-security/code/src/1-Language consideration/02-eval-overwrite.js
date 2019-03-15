// // enabling strict mode for this entire file
// // comment out the line below in order to run the same test w/o strict mode
// "use strict";

// // all of the examples below are syntax errors (when in strict mode)
// // comment them out 1-by-1 to test them out
// eval = 1;
// ++eval;
// var eval;
// function eval() { }


// let secret = 'shhhhh';

// eval('console.log("im string, but running as script in you envi")');
// eval('console.log("im stealing your secret "+secret)')


//

// var f=new Function('console.log("im stealing your secret "+secret)');
// f();

// var add=new Function('n1','n2','let r=n1+n2;return r;')
// console.log(add(12,13))