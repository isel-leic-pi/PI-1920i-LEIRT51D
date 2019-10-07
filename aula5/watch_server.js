'use strict'

const net = require('net')
const fs = require('fs')

const server = net.createServer()

fs.watch('file1.txt', fileChanged)

server.on('connection', handleConnection)
server.on('listening', logListening)

server.listen(8080)

console.log("Initial phase done")

function handleConnection(clientSocket){
    console.log("New connection")
    clientSocket.write("Hello\n")

    clientSocket.on('close', ()=>console.log('Client Disconnected'))
}

function logListening(){
    console.log("Listening")
}

function fileChanged(eventI, fileName){
    console.log(eventI + " : " + fileName)

}

