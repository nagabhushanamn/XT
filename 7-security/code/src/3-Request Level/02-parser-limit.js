// module dependencies
var express = require("express"),
    app = module.exports = express();

// limiting the allowed size of request bodies (by content-type)
app.use(express.urlencoded({ limit: "1kb" })); // application/x-www-form-urlencoded
app.use(express.json({ limit: "1kb" }));       // application/json
app.use(express.multipart({ limit: "5mb" }));  // multipart/form-data
app.use(express.limit("2kb"));                 // everything else

// the input forms
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/limits.html");
});

// accepts form submission and print a success message, provided it fits within
// our set size limits (content-type determines which parser middleware is used)
app.post("/", function (req, res) {
    res.type("html");
    res.write("<h1>Form Submitted Successfully!</h1>");
    if (req.body && Object.keys(req.body).length) {
        res.write("<pre>");
        res.write(JSON.stringify(req.body, null, 4));
        res.write("</pre>");
    }
    res.end();
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
