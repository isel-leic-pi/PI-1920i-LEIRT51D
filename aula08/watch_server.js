'use strict'

const net = require('net')
//const fs = require('fs')
const fw = require('./watch_files_module')

const server = net.createServer()

//fs.watch('file1.txt', fileChanged)
if(process.argv.length < 3 ){
    return console.log('No files')
}

let files = process.argv.slice(2)

//fw.watchFiles(files, fileChanged)

let filesWatcherEmitter = fw.create(files)
filesWatcherEmitter.on('change', fileChanged)

let clients =[]

server.on('connection', handleConnection)
server.on('connection', logConnectionInfo)

server.on('listening', logListening)

server.listen(8080)

console.log("Initial phase done")

function handleConnection(clientSocket){
    console.log("New connection")
    clientSocket.write("Hello\n")
    clients.push(clientSocket)

    clientSocket.on('data', handleData )

    function handleData(d){
        console.log('On Data')
        clients.forEach(c => c.write(d))
    }

    clientSocket.on('close', handleClose)

    function handleClose(){
        console.log('Client Disconnected')
        clients = clients.filter(c => c !== clientSocket)
        console.log(clients.length)
    }
}

function logListening(){
    console.log("Listening")
}

function fileChanged(eventI, fileName){
    console.log(eventI + " at Server : " + fileName)
    clients.forEach(c => c.write(eventI + " : " + fileName))

}

