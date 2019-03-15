// module dependencies
var toobusy = require("toobusy"),
    express = require("express"),
    app = module.exports = express();

// middleware which blocks requests when we"re too busy
app.use(function(req, res, next) {
    if (toobusy()) {
        res.send(503, "I'm busy right now, sorry.");
    } else {
        next();
    }
});

// interface for testing this module
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/toobusy.html");
});

// a slow-running route meant to cause lag on the server
app.get("/slow", function(req, res) {
    // each request takes 5 seconds to be fulfilled (blocking the whole time)
    var start = (new Date()).getTime(), now;
    while (((new Date()).getTime() - start) <= 5000); // run for 5 seconds
    res.send("Hello World");
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
