require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
const content = require('./content')
const bundles = require('./bundles')

const booksImg = require('./img/books-1012088_640.jpg').default


window.addEventListener('hashchange', hashChangeHandler)
document.body.innerHTML = content.main
hashChangeHandler()

function hashChangeHandler(){

    const mainContent = document.getElementById("mainContent")

    switch(window.location.hash){

        case '#home' :
            mainContent.innerHTML = content.home({booksImg}) 
            break;
        case '#bundles' :
            mainContent.innerHTML = content.bundles
            bundles.registerCreateBundle()
            bundles.listBundles() 
            break;
        default :
            window.location.hash = "home"

    }

}