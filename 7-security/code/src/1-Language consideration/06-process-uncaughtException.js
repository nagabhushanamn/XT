process.on("uncaughtException", function (err) {
    // we're just executing the default behavior
    // but you can implement your own custom logic here instead
    console.error(err);
    console.trace();
    process.exit(1);
});


// this error is not wrapped in any sort of try/catch, so it will cause the
// node process to emit an uncaughtException
throw new Error("throwing an error without try/catch");