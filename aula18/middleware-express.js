'use strict'

const express = require('express')
const app = express()

app.use(firstMiddleware)
app.use(secondMiddleware)

app.get('/', rootHandler)

app.listen(8080, () => console.log('Listening'))

function firstMiddleware(req, res, next){
    console.log('First Middleware')
    next()
}

function secondMiddleware(req, res, next){
    console.log('Second Middleware')
    if(!req.headers.authorization) return sendUnauthorize(res) 
    next()
}

function sendUnauthorize(res){
    console.log('unauthorize')
    res.status(401)
    res.end()
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