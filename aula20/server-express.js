'use strict'

const express = require('express')
const app = express()

app.use(express.json())
app.use('/files', express.static('public'))

app.get('/', rootHandler)

app.listen(8080, () => console.log('Listening'))

function rootHandler(req, res){
    res.send("Root handler")
}
