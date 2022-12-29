const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile(`${__dirname}/userapi.json`, (err, data) => {
            if (err) {
                res.end("Error 404")
            }
            res.end(data)
        })
    }
    else if (req.url == "/about") {
        fs.readFile("/home/faizanshaikh/Desktop/NodeJS/pageHTML/index.html", (err, data) => {
            if (err) {
                res.end("Error, Page Not Found")
            }
            res.end(data)
        })
    }
    else {
        res.writeHead(404, {"Content-Type":"text/html"})
        res.end("<h1> Error 404 </h1>")
    }
})

server.listen(3000, () => {
    console.log("listening at port 3000")
})