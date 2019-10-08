let array = [123, ,"STR"]

console.log(array.length)

console.log(array)

console.log(array[1])

array[100] = 100

console.log(array.length)

array.push("last")

console.log(array.length)
console.log(array[101])

array[102] = function () {return "func in 102"}

console.log(array.length)
console.log(array[102]())

array.name="ARRAY1"
console.log(array.name) 
