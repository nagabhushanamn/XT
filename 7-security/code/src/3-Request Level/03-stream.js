// module dependencies
var fs = require("fs"),
    express = require("express"),
    app = module.exports = express();

// the file upload form
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/upload-put.html");
});

// simply pipes the uploaded request body into a placeholder file
// (runs via AJAX, not HTML Form POST)
app.put("/", function (req, res) {
    req.pipe(fs.createWriteStream(__dirname + "/upload.tmp"));
    req.on("end", function () {
        res.send(200);
    });
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
