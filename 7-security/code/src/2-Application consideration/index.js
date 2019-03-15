// module dependencies
var express = require("express"),
    utils = require("../utils"),
    app = module.exports = express(); // export the app itself (so it can be mounted)

// individual chapter lessons
app.use("/basicAuth/simple", require("./01-basicAuth-simple"));
app.use("/basicAuth/callback", require("./02-basicAuth-callback"));
app.use("/basicAuth/async", require("./03-basicAuth-async"));
app.use("/userpass", require("./04-passport-local"));
app.use("/session", require("./05-passport-session"));
app.use("/authorization-simple", require("./06-authorization-simple"));
app.use("/authorization-advanced", require("./07-authorization-advanced"));
app.use("/errors", require("./08-errors"));

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
