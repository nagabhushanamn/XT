// module dependencies
var express = require("express"),
    utils = require("../utils"),
    app = module.exports = express();

// individual chapter lessons
app.use("/limit", require("./01-limit"));
app.use("/parser-limit", require("./02-parser-limit"));
app.use("/stream", require("./03-stream"));
app.use("/toobusy", require("./04-toobusy"));
app.use("/csrf", require("./05-csrf"));
app.use("/input-filter", require("./06-input-filter"));

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
