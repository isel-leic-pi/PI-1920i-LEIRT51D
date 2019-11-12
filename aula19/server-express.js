'use strict'

const express = require('express')
const app = express()
const usersData = require('./users-data-mem')
const authentication = require('./authentication')(usersData)

app.use(authentication)

app.get('/', rootHandler)

app.listen(8080, () => console.log('Listening'))

function rootHandler(req, res){
    res.json({userName: req.userName})
}
