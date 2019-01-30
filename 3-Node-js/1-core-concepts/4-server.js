


/*

To use the HTTP server and client one must require('http').

*/

const http = require('http');
const fs = require('fs');

// 
const server = http.createServer();  // web-server/app-server  ==> event-emitter

// 200 * 600 ==> 12000 MB

server.on('request', (request, response) => {

    /*
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello All, welcome to Node.js runtime based web server');
        response.end();
    */

    /*
    // Non Blocking IO
    fs.readFile('./recording.mp4', (err, data) => {
        response.writeHead(200, { 'Content-Type': 'video/mp4' });
        response.write(data)
        response.end();
    })
    */

    // Non Blocking IO  with stream

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const readStream = fs.createReadStream('./veg-menu.txt');  // EE
    readStream.on('data', (chunk) => {
        console.log("data event...");
        response.write(chunk);
    })
    readStream.on('end', () => {
        response.end();
    })


    console.log('server ready to take next request');
})

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})


