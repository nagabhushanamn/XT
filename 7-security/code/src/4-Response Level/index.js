// module dependencies
var express = require("express"),
    utils = require("../utils"),
    app = module.exports = express(); // export the app itself (so it can be mounted)

// individual chapter lessons
app.use("/xss", require("./01-xss"));
app.use("/helmet", require("./02-helmet"));

// use the README as the HTML for the root view
app.get("/", function (req, res, next) {
    utils.renderMarkdown(__dirname + "/README.md", res, next);
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
