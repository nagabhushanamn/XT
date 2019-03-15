var events = require("events"),
    emitter = new events.EventEmitter();

process.on("uncaughtException", function (err) {
    // we're just executing the default behavior
    // but you can implement your own custom logic here instead
    console.error(err);
    console.trace();
    process.exit(1);
});

// when an EventEmitter emits an "error" event without any listeners, it will
// trigger an uncaught exception as well...
//
// ALWAYS BIND LISTENERS FOR "error" EVENTS ON EventEmitter objects of all types

emitter.emit("error", new Error("emitter: emits an 'error' event without any handlers"));
