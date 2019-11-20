'use strict'

module.exports = function(router, service){

    router.get('/', rootHandler)
    router.get('/bundles', getBundles)

    return router

    function rootHandler(req, res){
        res.send("Root handler")
    }
    
    function getBundles(req, res){
        res.send("Get Bundles")
    }
}