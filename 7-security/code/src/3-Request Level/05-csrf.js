// module dependencies
var express = require("express"),
    app = module.exports = express();

app.use(express.cookieParser()); // required for session support
app.use(express.urlencoded());   // required by csrf
app.use(express.session({ secret: "keyboard cat" })); // required by csrf
app.use(express.csrf());

// landing page, just links to the 2 different sample forms
app.get("/", function (req, res) {
    res.send('<a href="valid/">Valid</a> <a href="invalid/">Invalid</a>')
});

// valid form, includes the required _csrf token in the HTML Form (hidden input)
app.get("/valid", function (req, res) {
    var output = "";
    output += '<form method="post" action="..">';
    output += '<input type="hidden" name="_csrf" value="' + req.session._csrf + '">';
    output += '<input type="submit">';
    output += '</form>';
    res.send(output);
});

// invalid form, does not have the required token
// throws a "Forbidden" error when submitted
app.get("/invalid", function (req, res) {
    var output = "";
    output += '<form method="post" action="..">';
    output += '<input type="submit">';
    output += '</form>';
    res.send(output);
});

// POST target, redirects back to home if successful
app.post("/", function (req, res) {
    res.send("SUCCESS!");
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
