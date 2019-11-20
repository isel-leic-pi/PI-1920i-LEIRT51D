'use strict'

module.exports = function(router, b4Service){

  router.get('/', getAllBundles)
  router.post('/', createBundle)

  return router
  
  function getAllBundles(req, res) {
    b4Service.getAllBundles(processGetAllBundles)

    function processGetAllBundles(err, bundles) {
      res.status(200).json(bundles)
     
      /*res.statusCode = 200
      res.setHeader('Content-type', 'application/json')
      res.end(JSON.stringify(bundles))*/
    }
  }

  function createBundle(req, res) {

    b4Service.createBundle(req.body.name, req.body.description, processCreateBundle)
  
    function processCreateBundle(err, id) {
      res.status(201).json(id)
    }

    /*let body = ''
    req.on('data', (chunk) => body += chunk.toString())
    req.on('end', () => {
      let bundle = JSON.parse(body)
      b4Service.createBundle(bundle.name, bundle.description, processCreateBundle)
  
      function processCreateBundle(err, id) {
        res.statusCode = 201
        res.setHeader('Content-type', 'application/json')
        res.end(JSON.stringify(status))
      }
    })*/
  }
}