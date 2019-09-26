"use strict"

let a1 = [1,2,3,4]

function filter(array, func)
{
    let newArray = []
    for(let e of array){
        if(func(e))
        {
            newArray.push(e)
        }
    }
    return newArray
}

let r1 = filter(a1,function(e){return e % 2})
console.log(r1); 
let r2 = a1.filter(function(e){return e % 2})
console.log(r2);

function map(array, func)
{
    let newArray = []
    for(let e of array){
        newArray.push(func(e))
    }
    return newArray
}

let r3 = map(a1,function(e){return e * 3})
console.log(r3); 
let r4 = a1.map(function(e){return e * 3})
console.log(r4);

function reduce(array, func, start)
{
    let current = start
    for(let e of array){
        current = func(current,e)
    }
    return current
}

let r5 = reduce(a1,function(c, e){return c + e} ,0)
console.log(r5);
let r6 = a1.reduce(function(c, e){return c + e} ,0)
console.log(r6); 


