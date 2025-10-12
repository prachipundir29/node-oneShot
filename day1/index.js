const { log } = require("console");
let http = require("http");

let server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome to the Node.js")

    }if(req.url === "/about"){
        let obj = {
            data: [
                {
                    name: "John",
                    age: 22,
                    skill: "JavaScript"
                },
                {
                    name: "Doe",
                    age: 25,
                    skill: "ReactJS"
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }if(req.url === "/contact"){
        res.end("This is contact page of Node.js")
    }if(req.url === "/services"){
      res.end("This is services page of Node.js")
    }else{
        log("Invalid URL")
    }
})

server.listen(5000,()=> {
    log("Server is listening on port 5000...") // http://localhost:5000
})