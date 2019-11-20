const request = require('request-promise')

const options = {
    method : 'GET',
    url : `http://localhost:9200/bundles/_search`,
    json : true,
    //resolveWithFullResponse: true
}

/*request(options, (err,res,body)=>{
    console.log(body.hits.hits.map(e=>e._source))
})*/ 

request(options)
    .then( body => console.log(body.hits.hits.map(e=>e._source)) )
    //.then( res => console.log(res.body.hits.hits.map(e=>e._source)) )
    .catch(err => console.log(err.message))