function f1()
{
    console.log("Start f1")

    function f2(n)
    {
        console.log("Function f2 parameter = " + n)
    }
    f2(1)
    f2(2)

    console.log("End f1")

}

f1()