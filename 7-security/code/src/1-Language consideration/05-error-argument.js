var fs = require("fs");

console.log("Error-handling in callbacks");
console.log();

console.log("Example: reading a non-existant file");
fs.readFile("file-that-does-not-exist", function (err, contents) {
    console.log("> the error will be passed as an Error object to the callback");
    console.error(">", err);
    done(); // proceed to the next test
});
