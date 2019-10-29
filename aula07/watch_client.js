'use strict'
 
const net = require('net')

const client = net.connect({port:8080})
client.on('data', processData)

function processData(d){
    let message = JSON.parse(d.toString())
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

