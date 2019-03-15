// module dependencies
var express = require("express"),
    app = module.exports = express();

// simple XSS test (an HTML GET Form)
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/xss-test.html");
});

app.get("/test", function (req, res) {
    /**
     * There is no filtering done on this query-string value, someone could
     * inject HTML (like scripts) that would be executed by the browser.
     *
     * This could easily be applied to any other sort of user input, or even
     * values stored in a database or otherwise.
     *
     * FILTER input & ESCAPE output
     */
    res.send("Hello, " + req.query.name);
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
