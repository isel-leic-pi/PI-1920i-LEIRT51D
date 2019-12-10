const bundlesData = require('./bundles-data')
const content = require('./content')


function listBundles(){
    const bundlesContainer = document.getElementById('bundlesContainer')
    bundlesData.getBundles()
        .then(bundles => bundlesContainer.innerHTML = content.bundlesTableTemplate({bundles}))
    }

function registerCreateBundle(){
    const formCreateBundle = document.getElementById("formCreateBundle")
    formCreateBundle.addEventListener('submit', submitHandler)

    function submitHandler(e){
        e.preventDefault()
        const inputName = document.getElementById("inputName")
        const inputDescription = document.getElementById("inputDescription")
            
        bundlesData.createBundle(inputName.value, inputDescription.value)
            .then(() => listBundles())

    }
    
}

module.exports = {
    listBundles : listBundles,
    registerCreateBundle : registerCreateBundle
}