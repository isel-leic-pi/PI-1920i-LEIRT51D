'use strict'
 
const net = require('net')

const client = net.connect({port:8080})
client.on('data', (d)=>console.log(d.toString()))

