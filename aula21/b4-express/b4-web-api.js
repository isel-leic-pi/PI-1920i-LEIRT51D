'use strict'

module.exports = function(router, b4Service){

  router.get('/', getAllBundles)
  router.post('/', createBundle)

  return router
  
  function getAllBundles(req, res) {

    b4Service.getAllBundles().then(bundles => res.status(200).json(bundles))

    /*b4Service.getAllBundles(processGetAllBundles)

    function processGetAllBundles(err, bundles) {
      res.status(200).json(bundles)
    }*/
  }

  function createBundle(req, res) {

    b4Service.createBundle(req.body.name, req.body.description)
      .then(id => res.status(201).json(id))

    /*b4Service.createBundle(req.body.name, req.body.description, processCreateBundle)
    function processCreateBundle(err, id) {
      res.status(201).json(id)
    }*/

  }
}