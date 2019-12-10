window.addEventListener('load', loadHandler)
window.addEventListener('hashchange', hashChangeHandler)

function loadHandler(){
    document.body.innerHTML = main
    hashChangeHandler()

}

function hashChangeHandler(){

    const mainContent = document.getElementById("mainContent")

    switch(window.location.hash){

        case '#home' :
            mainContent.innerHTML = home 
            break;
        case '#bundles' :
            mainContent.innerHTML = bundles
            registerCreateBundle()
            listBundles() 
            break;
        default :
            window.location.hash = "home"


    }

}