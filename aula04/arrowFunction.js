"use strict"

let f1 = (a,b) => a+b
console.log(f1(2,3))

let f2 = a => a*2
console.log(f2(2))

function normalizeFunc(){
    console.log(this.coord.map(function(e){ return e / this.length}))
}

function normalizeArrow(){

    console.log(this.coord.map(e => e / this.length))
}

normalizeFunc.call({coord : [0,2,3], length : 5})




