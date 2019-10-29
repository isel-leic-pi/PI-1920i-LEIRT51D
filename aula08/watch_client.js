'use strict'
 
const net = require('net')
const mE = require('./message-emitter-module')

const client = net.connect({port:8080})

const messageEmitter = mE.create(client)
messageEmitter.on('message', processMessage)


function processMessage(message){
    
    if(message.type == 'watching'){
        console.log('Watching  - ' + message.filesNames);
    }else{
        if(message.type == 'change'){
            console.log(message.eventType + ' - ' + message.file);
        }else{
            console.log("Other message type")
        }          
    }
    
    

}

