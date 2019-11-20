'use strict'

function pNumber(s){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(s.length),1000)    
    })
}

function pBoolean(n){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(n % 2 == 0),1000)    
    })
}

function pString(b){ 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(b ? 'ABC' : 'XYZ'), 1000)    
    })   
}

function delay(timeout, success, cb){
    setTimeout(()=>{
        if(!success) return cb('Error')
        cb(null,'Success')
    },timeout)
}

function delayPromise(timeout, success){
    return new Promise((resolve, reject)=>{
        delay(timeout, success, (err,result)=> err ? reject(err) : resolve(result) )
    })
}

function runPromise(text){
    pNumber(text)
        .then(pBoolean /*n=>pBoolean(n)*/)
        .then(pString /*b=>pBoolean(b)*/)
        .then(console.log /*s=>console.log(s)*/)
        .catch(console.log /*e=>console.log(e)*/)
}


async function runAsyncAwait(text){
    try{
        let n = await pNumber(text)
        let b = await pBoolean(n)
        let s = await pString(b)
        //await delayPromise(1000, false)
        console.log(s)

    }catch(e){
        console.log(e)
    }
}


runAsyncAwait('ISEL')
console.log("DONE, Really??")