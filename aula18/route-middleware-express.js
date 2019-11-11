'use strict'

const express = require('express')
const app = express()


app.get('/',firstMiddleware ,secondMiddleware ,rootHandler)

app.listen(8080, () => console.log('Listening'))

function firstMiddleware(req, res, next){
    console.log('First Middleware')
    next()
}

function secondMiddleware(req, res, next){
    console.log('Second Middleware')
    next()
}


function rootHandler(req, res){
    logRequest(req)
    res.send("Hello world")
}

function logRequest(req){
    console.log(`Host - ${req.hostname}`)
    console.log(`Method - ${req.method}`)
    console.log(`URL - ${req.url}`)
    console.log('Path - ', req.path)
    console.log('Params - ', req.params)
    console.log('Query - ', req.query)
    console.log('Body - ', req.body)

}