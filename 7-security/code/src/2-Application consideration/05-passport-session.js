// module dependencies
var express = require("express"),
    app = module.exports = express(),
    passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    utils = require("../utils"),
    // in-memory pool of credentials
    users = {
        admin: {
            name: "admin",
            password: "password"
        },
        user: {
            name: "user",
            password: "123456"
        }
    };

// LocalStrategy means we perform the authentication ourselves with
// credentials submitted via HTTP POST
passport.use(new LocalStrategy(function (user, pass, done) {
    // this is just a simulated async request, real-life code will make a
    // database call or use some sort of library
    process.nextTick(function () {
        if (users.hasOwnProperty(user) && users[user].password === pass) {
            done(null, users[user]);
        } else {
            done(null, false);
        }
    });
}));

// passport session support
passport.serializeUser(function (user, done) {
    // we will simply store the user's name/id only to save on memory
    done(null, user.name);
});
passport.deserializeUser(function (id, done) {
    // we're just using an in-memory list, but this could easily be async
    done(null, users[id]);
});

// this is required for sessions to be enabled
app.use(express.cookieParser());
// this must be mounted before passport
app.use(express.session({ secret: "keyboard cat" }));
// this is required for passport-local to access POST data
app.use(express.urlencoded());

// required to initialize passport for this application
app.use(passport.initialize());
// optional (though recommended) session support via passport
app.use(passport.session());

// the home page will contain the login form
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/login/form.html");
});

// set up the route that will actually process the login POST
app.post("/login", passport.authenticate("local", {
    successRedirect: "../success/",
    failureRedirect: "../failure/"
}));

// landing page on successful authentication
app.get("/success", function (req, res) {
    res.write("<h1>Success!</h1>");
    res.write("Session Data:");
    res.write("<pre>" + JSON.stringify(req.session, null, 4) + "</pre>");
    res.write("User Data:");
    res.write("<pre>" + JSON.stringify(req.user, null, 4) + "</pre>");
    res.write("<p>Go ahead, refresh and the data will remain intact!</p>");
    res.write('<a href="..">Back</a>');
    res.send();
});

// landing page after failed authentication
app.get("/failure", function (req, res) {
    utils.renderMarkdown(__dirname + "/views/login/failure.md", res, next);
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
