import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




//------------------------------------------------------------

let jsClock = document.querySelector('#js-clock');

let jsTick = () => {
    // data/model
    let time = new Date().toLocaleTimeString();

    let timeUI = `
        <div class="alert alert-info">
            <span class="badge badge-danger">${time}</span>
        </div>
    `
    jsClock.innerHTML = timeUI;  // DOM 

};


jsTick();
setInterval(jsTick, 1000)



//------------------------------------------------------------

let reactClock = document.querySelector('#react-clock');

let reactTick = () => {
    // data/model
    let time = new Date().toLocaleTimeString();

    // JSX
    let timeUI =
        <div className="alert alert-info">
            <span className="badge badge-success">{time}</span>
        </div>


    ReactDOM.render(timeUI, reactClock)

};

setInterval(reactTick, 1000)

//------------------------------------------------------------
