'use strict'

let pResolved = new Promise((resolve, reject)=>{ resolve(40)})
let pRejected = new Promise((resolve, reject)=>{ reject('Error')})

pResolved
    .then(v => console.log('pResolved ' + v))
    .catch(e => console.log('pResolved ' + e))

pRejected
    .then(v => console.log('pRejected ' + v))
    .catch(e => console.log('pRejected ' + e))
    
let p = new Promise(()=>console.log("Promise executor"))

console.log(p)
console.log(pResolved)
console.log(pRejected)


let pResolvedDelay = new Promise((resolve, reject)=>{ setTimeout(()=>resolve(40),3000)})
let pRejectedDelay = new Promise((resolve, reject)=>{ setTimeout(()=>reject('Error'), 2000)})

pResolvedDelay
    .then(v => console.log('pResolvedDelay ' + v))
    .catch(e => console.log('pResolvedDelay ' + e))

pRejectedDelay
    .then(v => console.log('pRejectedDelay ' + v))
    .catch(e => console.log('pRejectedDelay ' + e))

console.log('Done Really?')
