'use strict'

const express = require('express')
const app = express() 

app.use('/files', express.static('public'))
app.get('/bundles/:id', getBundle)

app.listen(8080, () => console.log('Listening on port 8080'))

function getBundle(req, res){

    res.status(200).json({name:"B1", description:"Desc1"})

}