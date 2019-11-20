'use strict'

function toNumber(s,cb){
    setTimeout(()=>cb(s.length),1000)
}

function toBoolean(n,cb){
    setTimeout(()=>cb(n % 2 == 0), 1000)
}

function toString(b,cb){    
    setTimeout(()=>cb(b ? 'ABC' : 'XYZ', 1000))
}

function run(text){
    toNumber(text, n =>{
        toBoolean(n, b =>{
            toString(b, s =>{
                console.log(s)
            })
         } )
    })
}


run('ISEL')
console.log("DONE, REAAlly??")