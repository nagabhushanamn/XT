


/*


 ==> All objects that emit events are instances of the EventEmitter class

*/

const EventEmitter = require('events');

/*
const ee = new EventEmitter();


// module-1:
//------------------------------------

ee.on('event-1', () => {
    console.log('handling event-1');
})

//------------------------------------


// module-2:
//------------------------------------

ee.on('event-1', () => {
    console.log('handling event-1');
})

//------------------------------------


// module-3:
//------------------------------------

ee.on('event-2', () => {
    console.log('handling event-2');
})

//------------------------------------


setTimeout(() => {
    ee.emit('event-1')
    setTimeout(() => {
        ee.emit('event-2')
    }, 1000)
}, 1000)

*/



//----------------------------------------------------------------------------



class Door extends EventEmitter {
    open() {
        console.log("door opened...")
        this.emit('open', { num: 16, floor: 2 });
    }
    close() {
        console.log("door closed..");
        this.emit('close', { num: 16, floor: 2 });
    }
}


const door = new Door();

// Light
//--------------------------------

door.on('open', (e) => {
    console.log("LIGHT ON..");
})

door.on('close', (e) => {
    console.log("LIGHT OFF.");
})

//--------------------------------

setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 3000)
}, 3000)