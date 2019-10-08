'use strict'

const EventEmitter = require('events').EventEmitter

let eventEmitter = new EventEmitter()

eventEmitter.on('testEvent', () => console.log('F1'))
eventEmitter.on('testEvent', () => console.log('F2'))

eventEmitter.emit('testEvent')

