const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("This is the home page")
    }
    else if (req.url == "/about") {
        res.end("This is about page")
    }
    else if (req.url == "/contact") {
        res.end("This is a contact Page")
    }
    else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/userapi.json`, (err, data) => {
            if (err) {
                res.end("<h1> Error </h1>")
            }
            res.end(data);
        } )
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end("<h1> Error 404 <br> Page Not Found </h1>")
    }
})

server.listen(8000, () => {
    console.log("Listening at port 8000")
})
