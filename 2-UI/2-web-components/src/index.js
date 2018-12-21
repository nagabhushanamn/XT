
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

// (function(){

console.log("-index.js-");
import 'bootstrap/dist/css/bootstrap.css'




//-------------------------------------------
// plain-js
//-------------------------------------------
// let root = document.getElementById('root');
// setInterval(() => {
//     let greetingUI = `
//         <div class="alert alert-info">
//             <p>good morning</p>
//             <hr/>
//             <p>${new Date().toLocaleTimeString()}</p>
//         </div>
//     `;
//     root.innerHTML = greetingUI
// }, 3000)


//-------------------------------------------


//-------------------------------------------
// jquery
//-------------------------------------------

// let $root = $('#root')
// setInterval(() => {
//     let greetingUI = `
//         <div class="alert alert-info">
//             <p>good morning</p>
//             <hr/>
//             <p>${new Date().toLocaleTimeString()}</p>
//         </div>
//     `;
//     $root.html(greetingUI)
// }, 3000)


//----------------------------------------------
// React
//----------------------------------------------


/*

<div class="alert alert-info">
    <p>good morning</p>
    <hr/>
    <p>time</p>
</div>

*/

/*
    group of react-element(s) ==> component
*/

class Greeting extends React.Component {
    constructor() {
        super();
        console.log("Greeting :: constructor");
    }
    render() {
        console.log('Greeting - render()');

        // let p1 = React.createElement('p', null, this.props.message)
        // let hr = React.createElement('hr')
        // let p2 = React.createElement('p', null, new Date().toLocaleTimeString())
        // let div = React.createElement('div', { className: 'alert alert-info' }, p1, hr, p2)
        // return div;

        //or  using JSX

        return (
            <div className="alert alert-info">
                <p>{this.props.message}</p>
                <hr />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        )

    }
}

class Box extends React.Component {
    constructor() {
        super();
        console.log("Box :: constructor");
    }
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 1000);
    }
    render() {
        console.log("Box :: render");

        // let greeting1 = React.createElement(Greeting, { message: 'good morning' }, null)
        // let greeting2 = React.createElement(Greeting, { message: 'good evening' }, null)
        // let div = React.createElement('div', { className: 'jumbotron' }, greeting1, greeting2)
        // return div;

        return (
            <div className="jumbotron">
                <Greeting message={"good morning"} />
                <Greeting message={"good evening"} />
            </div>
        )

    }
}

// let box = React.createElement(Box)
//or
let box = <Box />

let root = document.getElementById('root'); // actual DOM element
ReactDOM.render(box, root)
