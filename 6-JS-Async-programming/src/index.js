console.log('-index.js-')
import 'bootstrap/dist/css/bootstrap.css';


// #1

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();


// #2
// function foo(){ throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();

// #3
// function foo(){
//     foo();
// }
// foo();


//#4

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log("long.....");  
//         i++;
//     }
// }

// function shortRunning(){
//     console.log('short...');  
// }

// longRunning();
// shortRunning();


// #5  , on event , how .js programs are executing?




