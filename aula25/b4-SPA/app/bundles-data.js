function getBundles(){
    return fetch("http://localhost:8080/api/bundles")
        .then(res => res.json())
}

function createBundle(n, desc){

    const options ={
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body : JSON.stringify({
            name : n,
            description : desc

        } )
    }
    return fetch("http://localhost:8080/api/bundles",options)
        .then(res=> res.json())
}