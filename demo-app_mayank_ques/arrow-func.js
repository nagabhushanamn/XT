

"use strict"

let mayank = {
    name: 'Mayank',
    doWork: function () {
        console.log(this);
        let regFunc = function () { console.log(this) }
        let arrFunc = () => { console.log(this) }
        regFunc();
        arrFunc();
    }
}

mayank.doWork();