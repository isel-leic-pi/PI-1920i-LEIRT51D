'use strict'

const EventEmitter = require('events').EventEmitter

function MessageEmitter(client){
    let buffer = []
    client.on('data', d => {
        buffer += d
        let newLineIndex = buffer.indexOf('\n')
        if(newLineIndex != -1){
            let message = buffer.substring(0, newLineIndex)
            this.emit('message', JSON.parse(message))
            buffer = ''
        }
    })
}

MessageEmitter.prototype = EventEmitter.prototype

module.exports.create = (client) => new MessageEmitter(client)