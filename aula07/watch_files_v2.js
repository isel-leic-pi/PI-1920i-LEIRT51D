'use strict'

let fs = require('fs')
let fw = require('./watch_files_module')

if(process.argv.length < 3 ){
    return console.log('No files')
}

let files = process.argv.slice(2)

fw.watchFiles(files, processWatch)

console.log("End of initial phase")

function processWatch(eventT, fileName){
    console.log(eventT, fileName)
}
