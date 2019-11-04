'use strict'

module.exports = function (booksData, bundlesData){
    
    return {
        getAllBundles: getAllBundles,
        createBundle: createBundle
    }

    function getAllBundles(cb){
        bundlesData.getAllBundles((err,bundles)=>cb(err, bundles))
        
    }
    
    function createBundle(name, description, cb){
        bundlesData.createBundle(name, description, (err, status) => cb(err, status))
    }
}

