'use strict'

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.get('/', rootHandler)
app.get('/test', testHandler)

app.listen('8080', ()=>{console.log('Listening')})

const bag = {
    items : ['smartphone X', 'cover Y'],
    value : 1234
}

function rootHandler(req, res){
    res.cookie("name", "Filipe", {expires : new Date(Date.now() + 60000) })
    res.cookie("bag" , JSON.stringify(bag) )
    res.send('<a href="test"> Test </a>')
}

function testHandler(req, res){
    console.log(req.cookies)
    res.send('<a href="/"> Root </a>')
}
