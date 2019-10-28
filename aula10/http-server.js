const http = require('http')

const server = http.createServer(processRequest)
server.listen(8080, ()=>console.log("Listening"))

function processRequest(req, res){
    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)

    res.setHeader("Content-Type", "application/json")
    //res.write(JSON.stringify({name:"Filipe"}))
    res.end(JSON.stringify({name:"Filipe"}))
}