// module dependencies
var express = require("express"),
    app = module.exports = express();

app.use(express.limit("5mb")); // sets an upper-limit on request body size
app.use(express.multipart()); // required for file uploads to be processed

// the upload file form
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/upload.html");
});

// accepts the file upload and prints the meta-data associated w/ the uploaded
// file (if successful, that is)
app.post("/", function (req, res) {
    res.type("html");
    res.write("<h1>File Uploaded!</h1>");
    res.write("<pre>" + JSON.stringify(req.files.testfile, null, 4) + "</pre>");
    res.end();
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
