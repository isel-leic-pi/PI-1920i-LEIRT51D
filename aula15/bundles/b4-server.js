const http = require('http')

const bundlesData = require('./bundles-data')()
const booksData = require('./books-data')
const b4Service = require('./b4-service')(booksData,bundlesData)
const b4Api = require('./b4-web-api')(b4Service)
const router = require('./simple-router')

router.get('/bundles', b4Api.getAllBundles)
router.post('/bundles', b4Api.createBundle)

server = http.createServer(router)

server.listen('8080', ()=>console.log('Listening'))
