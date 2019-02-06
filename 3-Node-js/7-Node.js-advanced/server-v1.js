

const http = require('http');
const numCPUs = require('os').cpus().length;
const cluster = require('cluster');

// console.log(numCPUs);


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        console.log(`${process.pid} accepted request`);
        res.writeHead(200);
        let n = 0;
        for (let i = 0; i < 1000000000; i++) {
            n++;
        }
        res.end(`hello world from ${process.pid} with count ${n}\n`);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
