// module dependencies
var express = require("express"),
    helmet = require("helmet"),
    app = module.exports = express();

// default configuration of all available helmet headers
app.use(helmet.csp());
app.use(helmet.hsts());
app.use(helmet.xframe());
app.use(helmet.iexss());
app.use(helmet.contentTypeOptions());
app.use(helmet.cacheControl());

// NOTE: above is functionally the same as:
// helmet.defaults(app);

app.get("/", function (req, res) {
    res.send("Use your browser's development tools to see the headers set by the various helmet middleware");
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
