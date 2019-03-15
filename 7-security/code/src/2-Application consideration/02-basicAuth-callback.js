// module dependencies
var express = require("express"),
    app = module.exports = express(),
    users = {
        // username: "password"
        admin: "password",
        user: "123456"
    };

/**
 * HTTP Basic Auth using a callback function. Here, we are using an in-memory
 * list to authenticate against, which is a synchronous operation
 */
app.use(express.basicAuth(function (user, pass) {
    return users.hasOwnProperty(user) && users[user] === pass;
}));

// this route will be run only after authentication is successful
app.get("/", function (req, res) {
    res.send("Successfully Authenticated");
});

// if being loaded directly, it will not be mounted in another application
// therefore, run as a standalone server
if (!module.parent) {
    app.listen(3000);
    console.log("Server listening at http://localhost:3000/");
}
