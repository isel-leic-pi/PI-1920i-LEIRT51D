"use strict"

function f(){
    console.log(this)
}

f()

let obj1 = {
    m : f
}

let obj2 = {
    mz : f
}

obj1.m()
obj2.mz()

function Point(x,y)
{
    console.log(this)
    this.x=x
    this.y=y
    console.log(this)
}

let p1 = new Point(3,5)
console.log(p1)
let p2 = new Point(7,12)
console.log(p2)


function add(a,b){ return a + b}

console.log(add.call(undefined,10,2))
console.log(add.apply(, [10,2]))

f.call(obj1)
f.call(obj2)