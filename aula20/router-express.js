'use strict'

const express = require('express')
const app = express()
const router = express.Router()
const routerBundlesApi = require('./bundles-webapi')(router,null)

app.use('/api', routerBundlesApi)

app.listen(8080, () => console.log('Listening'))

