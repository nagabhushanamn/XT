var http = require("http"),
    domain = require("domain"),
    server = http.createServer(),
    counter = 0;

server.on("request", function (req, res) {
    // this domain will cover this entire request/response cycle
    var d = domain.create();

    d.on("error", function (err) {
        // outputs all relevant context for this error
        console.error("Error:", err);

        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err.message);

        // stops the server from accepting new connections/requests
        // any existing connections will be fulfilled before terminating
        console.warn("closing server to new connections");
        server.close(function () {
            console.warn("terminating process");
            process.exit(1);
        });
    });

    // if the request or response objects emit errors, the domain will need to
    // be notified, by adding these objects to the domain, that will happen
    // automatically
    d.add(req);
    d.add(res);

    d.run(function () {
        if (++counter === 4) {
            throw new Error("Unexpected Error");
        }

        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Hello World\n");
    });
});

server.listen(3000);
console.log("server listening at port 3000");
console.log("don't use a browser, instead use curl: (run this 5 times)");
console.log("> curl http://localhost:3000/");
console.log();
