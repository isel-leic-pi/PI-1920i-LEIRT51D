function f1()
{
    return "Function f1"
}

console.log(f1())

let v1 = f1;

console.log(v1())

let v2 = function()
{
    console.log("Function f2")
}

v2()
console.log(v2())

let std1 = {name:"Joao", number : 1}
let std2 = {name:"Tiago", number : 2}

std1.m1 = function(){ console.log("Function m1")}

std1.m1()


function showProps(obj)
{
    for(let p in obj)
    {
        let prop =  obj[p]
        if(prop instanceof Function)
        {
            prop()
        }else
        {
            //console.log(p + " : " + prop)
            console.log(`${p} : ${prop}`)
        }   
    }
}

showProps(std1)

function fn(n, func)
{
    for(let i=0; i<n; ++i){
        console.log(func())
    }
}

fn(5,f1)

function f3(a,b,c)
{
    console.log("Parameters")
    console.log(a)
    console.log(b)
    console.log(c)
}

f3(1)
f3(1,2)
f3(1,2,3)

function f4(a, ...rest)
{
    console.log(a)
    console.log(rest)
}
f4(1)
f4(1,2)
f4(1,2,3)

