'use strict'

const express = require('express')
const app = express()

app.use(express.json())

app.get('/', rootHandler)
app.get('/bundles' , getBundles)
app.get('/bundles/:id' , getBundleById)
app.post('/bundles',postBundle)
app.all('/all', allHandler)


app.listen(8080, () => console.log('Listening'))

function allHandler(req, res){
    logRequest(req)
    res.send({method : req.method})

}

function postBundle(req, res){
    logRequest(req)
    res.json({id:1})
}

function getBundleById(req, res){
    logRequest(req)
    res.json({name:"b1"})
}

function getBundles(req, res){
    logRequest(req)
    //res.send([{name:"b1"}, {name:"b2"}])
    res.json([{name:"b1"}, {name:"b2"}])
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