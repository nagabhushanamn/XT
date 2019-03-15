// module dependencies
var express = require("express"),
    app = module.exports = express();
    users = {
        dominic: { role: "admin" },
        matthew: { role: "user" },
        gabriel: { role: "user" }
    };

app.use(express.cookieParser());
app.use(express.session({ secret: "keyboard cat" }));

// only allow a user that has "logged in" to proceed
function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.send(403); // Forbidden
    }
}

// allow a user with a specific role to access a resource
function role(name) {
    return function (req, res, next) {
        if (req.session.user.role === name) {
            next();
        } else {
            res.send(403);
        }
    };
}

// give a menu to login as a specific user
app.get("/", function (req, res) {
    res.type("html");
    res.write("Login As:");
    Object.keys(users).forEach(function (name) {
        res.write(' <a href="login/' + name+ '">' + name + '</a>');
    });
    res.end();
});

// present the user with options to attempt
app.get("/users", restrict, function (req, res) {
    res.type("html");
    res.write("Delete:");
    Object.keys(users).forEach(function (name) {
        res.write(' <a href="delete/' + name+ '">' + name + '</a>');
    });
    res.end();
})

// fake login, just need to demonstrate authorization here
app.get("/login/:name", function (req, res) {
    if (!users.hasOwnProperty(req.params.name)) {
        return res.send(404);
    }

    req.session.user = users[req.params.name];
    res.redirect("../../users");
});

// this is just a no-op route meant to demonstrate the usage of additional middleware
app.get("/delete/:user", restrict, role("admin"), function (req, res) {
    res.send(200);
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
