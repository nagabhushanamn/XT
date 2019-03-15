// module dependencies
var express = require("express"),
    utils = require("./utils"),
    app = express(); // create a new express application

// add a global middleware (just a browser favicon)
app.use(express.favicon());

// each chapter is mounted as a separate application
app.use("/chapter3", require("./chapter3"));
app.use("/chapter4", require("./chapter4"));
app.use("/chapter5", require("./chapter5"));

// use the README as the HTML for the root view
app.get("/", function (req, res, next) {
    utils.renderMarkdown(__dirname + "/README.md", res, next);
});

app.listen(3000); // starts up the web server itself
console.log("Server listening at http://localhost:3000/");
