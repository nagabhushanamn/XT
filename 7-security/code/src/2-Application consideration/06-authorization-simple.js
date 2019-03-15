// module dependencies
var express = require("express"),
    app = module.exports = express();

// only allow a user that has "logged in" to proceed
function restrict(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.send(403); // Forbidden
    }
}

app.use(function (req, res, next) {
    // this is a fake authentication layer, anything that sets req.user
    // (like Passport.js) will work in this situation
    if (req.url === "/authorized") {
        req.user = { name: "ADMIN" };
    }

    next();
});

// a "menu" for testing different routes that could be encountered by a user
app.get("/", function (req, res) {
    res.send('Test <a href="authorized">Authorized</a> <a href="unauthorized">Unauthorized</a>');
});

// this will only run if the middleware located above runs (which it only will
// for this route)
app.get("/authorized", restrict, function (req, res) {
    res.send("You are authorized");
});

// this will always fail because of the restrict function (since the middleware
// does not set a valid user on this request object)
app.get("/unauthorized", restrict, function (req, res) {
    res.send("You are unauthorized");
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
