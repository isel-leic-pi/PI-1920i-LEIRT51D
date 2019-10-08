function m(f)
{
    return function (n) {return n * f}
}

let m2 = m(2);
let m10 = m(10);
m2 = m10

console.log(m2(4))
console.log(m10(5))