


function logger(env) {
    return function (req, res, next) {
        let start = +new Date();
        let url = req.url;
        let method = req.method;

        res.on('finish', () => {
            let end = +new Date();
            let duration = end - start;
            let logMessage = `${method}:${url} - took ${duration}ms \n`
            if (env === "DEV") {
                process.stdout.write(logMessage);
            }
        })

        next();
    }
}

module.exports = logger;