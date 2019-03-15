// module dependencies
var express = require("express"),
    app = module.exports = express();

// error-handling middleware
app.use(function (err, req, res, next) {
    console.log("Custom Error Handler");
    console.trace();
    console.error(err);

    // just responds with a 500 status code and the error message
    res.send(500, "ERROR ENCOUNTERED:" + err.message);
});

// just a menu of actions to take
app.get("/", function (req, res) {
    res.type("html");
    res.write("Some Errors to Trigger:");
    res.write("<dl>");
    res.write('<dt><a href="throw/now">Throw an Exception Immediately</a></dt>');
    res.write('<dd>This will throw an exception that Express is able to catch itself</dd>');
    res.write('<dt><a href="throw/async">Throw an Exception Asynchronously</a></dt>');
    res.write('<dd>This will throw an exception that Express is not able to catch, and <b>the server will crash</b></dd>');
    res.write('<dt><a href="middleware">Use the error-handling middleware</a></dt>');
    res.write('<dd>This will pass an <code>Error</code> object to the Express <code>next()</code> callback, invoking the error-handling middleware</dd>');
    res.end("</dl>");
});

app.get("/throw/now", function (req, res) {
    throw new Error("some random error");

    // this will never be reached, but Express will retain control and the server will be fine
    // of course, using try/catch here will help prevent fatal errors, but that does
    // not work for asynchronous code
    res.send(200);
});

app.get("/throw/async", function () {
    process.nextTick(function () {
        throw new Error("some async error");

        // this will never be reached, and the entire server will crash :(
        res.send(200);
    });
});

app.get("/middleware", function (req, res, next) {
    // this is the proper way to handle errors, by using the express middleware
    // callback, provided you can't correct the error yourself within your
    // handler directly
    process.nextTick(function () {
        next(new Error("an unforeseen error"));
    });
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
