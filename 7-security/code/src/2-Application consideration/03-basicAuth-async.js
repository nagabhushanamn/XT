// module dependencies
var express = require("express"),
    app = module.exports = express(),
    users = {
        // username: "password"
        admin: "password",
        user: "123456"
    };

/**
 * HTTP Basic Auth using an asynchronous callback. Here, we are still using the
 * in-memory list (same as the previous example) but we're adding
 * process.nextTick() to simulate an asynchronous action.
 *
 * In a real-world scenario, your asynchronous function would call upon some
 * other datasource like a database, which would be inherently asynchronous.
 */
app.use(express.basicAuth(function (user, pass, done) {
    // simulated async operation
    process.nextTick(function () {
        var valid = users.hasOwnProperty(user) && users[user] === pass;
        done(null, valid);
    });
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
