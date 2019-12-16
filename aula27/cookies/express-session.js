'use strict'

const express = require('express')
const expressSession = require('express-session')

const app = express()

app.use(expressSession({secret : 'PI 2019'}))
app.get('/', rootHandler)
app.get('/test', testHandler)

app.listen('8080', ()=>{console.log('Listening')})

const bag = {
    items : ['smartphone X', 'cover Y'],
    value : 1234
}

function rootHandler(req, res){
    console.log('rootHandler');
    req.session.name= "Filipe"
    req.session.bag = JSON.stringify(bag)
    res.send('<a href="test"> Test </a>')
}

function testHandler(req, res){
    console.log(req.session)
    res.send('<a href="/"> Root </a>')
}
