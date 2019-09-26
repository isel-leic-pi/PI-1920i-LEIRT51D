function f1(x)
{
    console.log("Start f1")

    function f2(y)
    {
        console.log(x + " : " + y)
    }

    console.log("End f1")

    return f2
}

let f11 = f1(11)
let f12 = f1(12)

f11("str11")
f12("str12")

f1(21)(44)