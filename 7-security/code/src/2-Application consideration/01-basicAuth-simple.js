// module dependencies
var express = require("express"),
    app = module.exports = express();

// only a single HTTP Basic Auth middleware
app.use(express.basicAuth("admin", "password"));

// this route will be run only after authentication is successful
app.get("/", function (req, res) {
    res.send("Successfully Authenticated");
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
