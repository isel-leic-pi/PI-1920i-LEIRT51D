'use strict'

const fs = require('fs')

function monitorFiles(files, cb){

    files.forEach(watchFile)

    function watchFile(file){

        fs.access(file, fs.constants.F_OK, registerWatch)
       
        function registerWatch(err){
            if(err){
                return console.log(file + ' does not exist')
            }
            fs.watch(file,cb)
        }
    }

}

module.exports.watchFiles = monitorFiles
