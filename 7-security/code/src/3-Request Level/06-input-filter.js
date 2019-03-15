// module dependencies
var express = require("express"),
    app = module.exports = express();

app.use(express.urlencoded());           // required by csrf
app.use(require("express-validator")()); // the validation middleware

// an HTML form to be validated
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/validate-input.html");
});

/**
 * Validates the input, will either:
 *  - sends a 403 Forbidden response in the event of validation errors
 *  - send a 200 OK response if the data validates successfully
 */
app.post("/", function (req, res, next) {
    // validation
    req.checkBody("name").notEmpty().is(/\w+/);
    req.checkBody("email").isEmail();
    req.checkBody("website").isUrl();
    req.checkBody("age").isInt().min(0).max(100);
    req.checkBody("gender").isIn([ "M", "F" ]);

    // filtering
    req.sanitize("name").trim();
    req.sanitize("email").trim();
    req.sanitize("age").toInt();

    var errors = req.validationErrors(true);

    if (errors) {
        res.json(403, {
            message: "There were validation errors",
            errors: errors
        });
    } else {
        res.json({
            name: req.param("name"),
            email: req.param("email"),
            website: req.param("website"),
            age: req.param("age"),
            gender: req.param("gender")
        });
    }
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
