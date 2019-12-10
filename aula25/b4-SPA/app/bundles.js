//window.addEventListener('load', loadHandler)


function listBundles(){
    const bundlesContainer = document.getElementById('bundlesContainer')
    getBundles()
        .then(bundles => bundlesContainer.innerHTML = bundlesTableTemplate({bundles}))
    }

function registerCreateBundle(){
    const formCreateBundle = document.getElementById("formCreateBundle")
    formCreateBundle.addEventListener('submit', submitHandler)

    function submitHandler(e){
        e.preventDefault()
        const inputName = document.getElementById("inputName")
        const inputDescription = document.getElementById("inputDescription")
            
        createBundle(inputName.value, inputDescription.value)
            .then(() => listBundles())

    }
    
}