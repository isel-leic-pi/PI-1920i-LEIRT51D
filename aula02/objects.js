let std1 = {name:"Joao" , number:123}

console.log(std1)

std1.email = "email@sss.pt"

console.log(std1)

delete std1.name

console.log(std1)

function createStudent(name, number)
{
    let std = {}
    std.name = name
    std.number = number
    return std
}

let std2 = createStudent("STD2" , 2)
let std3 = createStudent("STD3" , 3)

console.log(std2["name"])
console.log(std3["name"])

function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + " : " + obj[p])
    }
}

showProps(sstd3)
