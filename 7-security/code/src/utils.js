var fs = require("fs"),
    marked = require("marked");

// wrapper function for rendering a markdown file as an Express route handler
exports.renderMarkdown = function (file, res, next) {
    fs.readFile(file, "utf8", function (err, data) {
        if (err) {
            next(err);
        } else {
            res.type("html").send(marked(data));
        }
    });
};
