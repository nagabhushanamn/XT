
const http = require('http');
http.createServer((req, res) => {
    console.log(`${process.pid} accepted request`);
    res.writeHead(200);
    let n = 0;
    for (let i = 0; i < 1000000000; i++) {
        n++;
    }
    res.end(`hello world from ${process.pid} with count ${n}F\n`)
}).listen(8000);