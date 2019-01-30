
const http = require('http');

// web app ==> server + request-processing logic

let server = http.createServer();

server.on('request', function (req, res) {

    //..
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write('Hello World');
    // res.end();

    let httpMethod = req.method;
    let url = req.url;


    // console.log(httpMethod);
    // console.log(url);  

    if (url === "/" && httpMethod === "GET") {
        res.write(httpMethod + ":" + url)
        res.end();
    }
    if (url === "/todos" && httpMethod === "POST") {
        res.write(httpMethod + ":" + url)
        res.end();
    }


})

server.listen(8080, () => {
    console.log("server running at http://localhost:8080");
})

