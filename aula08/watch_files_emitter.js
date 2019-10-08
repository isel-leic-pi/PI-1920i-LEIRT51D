'use strict'

const fs = require('fs')
const EventEmitter = require('events').EventEmitter

function WatchFilesEmitter(files){

    const self = this

    files.forEach(watchFile)

    function watchFile(file){

        fs.access(file, fs.constants.F_OK, registerWatch)
       
        function registerWatch(err){
            if(err){
                return console.log(file + ' does not exist')
            }
            fs.watch(file, emitChange)
            function emitChange(e,f){
                self.emit('change', e, f)
            }
        }
    }
}

WatchFilesEmitter.prototype = EventEmitter.prototype

module.exports.create = (files) => new WatchFilesEmitter(files)
