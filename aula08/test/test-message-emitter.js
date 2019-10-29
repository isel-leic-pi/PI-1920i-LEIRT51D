const assert = require('assert')
const mE = require('./../message-emitter-module')
const EventEmitter = require('events').EventEmitter

describe('Tests Message Emitter', ()=>{

    it('test emitter with on event', (done)=>{
        const eventEmitter = new EventEmitter();
        const messageEmitter = mE.create(eventEmitter)
        messageEmitter.on('message', m => {
            assert.deepStrictEqual(m,{prop:1})
            done()
        })

        setTimeout(()=>eventEmitter.emit('data', JSON.stringify({prop:1}) + '\n'),1000)
    })
})