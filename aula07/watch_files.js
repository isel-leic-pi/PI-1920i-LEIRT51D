'use strict'

let fs = require('fs')

if(process.argv.length < 3 ){
    return console.log('No files')
}

//console.log(process.argv)

fs.watch(process.argv[2], processWatch)
fs.watch(process.argv[3], processWatch)

function processWatch(eventT, fileName){
    console.log(eventT, fileName)
}